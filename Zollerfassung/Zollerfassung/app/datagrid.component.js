"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DataGrid = (function () {
    function DataGrid(http) {
        this.rows = [];
        this.columns = [
            { title: 'Lfd. Nr.', name: 'ID' },
            { title: 'Lieferschein-Nr.', name: 'LIEF_NR' },
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
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.config = {
            paging: true,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered']
        };
        this.http = http;
        this.reloadData();
    }
    DataGrid.prototype.reloadData = function () {
        var _this = this;
        this.http.get('/api/Zollerfassung')
            .map(function (res) { return res.json(); })
            .subscribe(function (zollerfassung) {
            _this.data = zollerfassung;
            _this.length = _this.data.length;
            _this.onChangeTable(_this.config);
        });
    };
    DataGrid.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    DataGrid.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    DataGrid.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name] && item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    DataGrid.prototype.onCellClick = function () {
    };
    DataGrid.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        var filteredData = this.changeFilter(this.data, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
    };
    return DataGrid;
}());
DataGrid = __decorate([
    core_1.Component({
        selector: 'data-grid',
        templateUrl: '/app/datagrid.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DataGrid);
exports.DataGrid = DataGrid;
//# sourceMappingURL=datagrid.component.js.map