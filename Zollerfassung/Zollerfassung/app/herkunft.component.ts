import { Component } from '@angular/core';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'herkunft',
    template: '<add-button-base #buttonComponent entity="Herkunft" (onSuccess)="gridComponent.reloadData()"></add-button-base>' +
    '<base-data-grid (onClick)="buttonComponent.openEditModal($event)" entity="Herkunft" #gridComponent></base-data-grid>'
})

export class Herkunft {}