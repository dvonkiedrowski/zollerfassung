﻿import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
    selector: 'data-grid',
    templateUrl: '/app/datagrid.component.html'
})

export class DataGrid {
    http: Http;
    public rows: Array<any> = [];
    public columns: Array<any> = [
        { title: 'Lfd. Nr.', name: 'ID' },
        { title: 'Lieferschein-Nr.', name: 'LIEF_NR'},
        { title: 'Kennzeichen', name: 'Kennzeichen' },
        { title: 'Spediteur', name: 'SpediteurName' },
        { title: 'Lieferant', name: 'LieferantName' },
        { title: 'Herkunft', name: 'HerkunftName' },
        { title: 'Gas-Art', name: 'GasartName' },
        { title: 'Datum Zugang', name: 'DAT_Zugang' },
        { title: 'Kg-Menge', name: 'Menge' },
        { title: 'Datum Abgang', name: 'DAT_Abgang' },
        { title: 'Anmerkung', name: 'Bemerkung' }
    ];
    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 5;
    public numPages: number = 1;
    public length: number = 0;

    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered']
    };

    private data: Array<any>;

    constructor(http: Http) {
        this.http = http;
        this.reloadData();
    }

    public reloadData() {
        this.http.get('/api/Zollerfassung')
            // Call map on the response observable to get the parsed people object
            .map(res => res.json())
            // Subscribe to the observable to get the parsed people object and attach it to the
            // component
            .subscribe(zollerfassung => {
                this.data = zollerfassung;
                this.length = this.data.length;
                this.onChangeTable(this.config);
            });
    }

    public changePage(page: any, data: Array<any> = this.data): Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }

        if (!columnName) {
            return data;
        }

        // simple sorting
        return data.sort((previous: any, current: any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }

    public changeFilter(data: any, config: any): any {
        let filteredData: Array<any> = data;
        this.columns.forEach((column: any) => {
            if (column.filtering) {
                filteredData = filteredData.filter((item: any) => {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });

        if (!config.filtering) {
            return filteredData;
        }

        if (config.filtering.columnName) {
            return filteredData.filter((item: any) =>
                item[config.filtering.columnName].match(this.config.filtering.filterString));
        }

        let tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
            let flag = false;
            this.columns.forEach((column: any) => {
                if (item[column.name] && item[column.name].toString().match(this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;

        return filteredData;
    }

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }

        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.changeFilter(this.data, this.config);
        let sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    }
}