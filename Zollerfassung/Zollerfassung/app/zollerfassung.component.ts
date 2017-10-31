import { Component } from '@angular/core';
import { DataGrid } from './datagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'zollerfasung',
    template: '<add-button #buttonComponent (onSuccess)="gridComponent.reloadData()"></add-button>' +
    '<data-grid #gridComponent (onClick)="buttonComponent.openEditModal($event)">Loading Angular 2 App using Visual Studio 2017...</data-grid>'
})

export class Zollerfassung { }