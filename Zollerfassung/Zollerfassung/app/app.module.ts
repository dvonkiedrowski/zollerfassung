import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgFor } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule, ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';
//import { defineLocale } from 'ngx-bootstrap/bs-moment';
//import { de } from 'ngx-bootstrap/locale';
import { DataGrid } from './datagrid.component';
import { Lieferant } from './lieferant.component';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';
import { Zollerfassung } from './zollerfassung.component';
import { Main } from './main.component';

const appRoutes: Routes = [
    { path: 'lieferant', component: Lieferant },
    { path: 'zollerfassung', component: Zollerfassung },
    {
        path: '',
        redirectTo: '/zollerfassung',
        pathMatch: 'full'
    },
    { path: '**', component: Zollerfassung }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        HttpModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        Ng2TableModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [DataGrid, AddButton, Main, BaseDataGrid, Lieferant, Zollerfassung],
    bootstrap: [Main]
})

export class AppModule {
    //constructor() {
    //    defineLocale('de', de);
    //}
}