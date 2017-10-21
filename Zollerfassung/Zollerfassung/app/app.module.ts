import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule, ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { de } from 'ngx-bootstrap/locale';
import { DataGrid } from './datagrid.component';
import { Lieferant } from './lieferant.component';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';
import { Main } from './main.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        PaginationModule.forRoot(),
        Ng2TableModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [DataGrid, AddButton, Main, BaseDataGrid, Lieferant],
    bootstrap: [ Lieferant]
})

export class AppModule { }