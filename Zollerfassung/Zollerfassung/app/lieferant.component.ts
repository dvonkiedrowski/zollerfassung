import { Component } from '@angular/core';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'lieferant',
    template: '<add-button-base #buttonComponent entity="Lieferant" (onSuccess)="gridComponent.reloadData()"></add-button-base>' +
    '<base-data-grid (onClick)="buttonComponent.openEditModal($event)" entity="Lieferant" #gridComponent></base-data-grid>'
})

export class Lieferant {}