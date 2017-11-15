import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Http } from '@angular/http';
import { DataGrid } from './datagrid.component';
import { AddButton } from './addButton.component';
import { BaseDataGrid } from './baseDatagrid.component';
import { Zollerfassung } from './zollerfassung.component';
import { Lieferant } from './lieferant.component';
import { Spediteur } from './spediteur.component';
import { Gasart } from './gasart.component';
import { Herkunft } from './herkunft.component';
import { AddButtonBase } from './addbuttonBase.component';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'main',
    templateUrl: '/app/main.component.html'
})

export class Main {
    currenturl: string;
    public mandanten: Array<any> = [];
    public selectedTenant: any;

    constructor(private http: Http, private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.currenturl = event.url; // event.url has current url
            }
        });

        http.get('/api/Mandant')
            .map(res => res.json())
            .subscribe(mandanten => {
                this.mandanten = mandanten;
            });
    }

    public setTenantFilter(event: any): void {
        this.http.post('/api/Mandant', this.selectedTenant).subscribe();
    }
}