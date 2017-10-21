import { Component } from '@angular/core';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'lieferant',
    template: '<add-button (onSuccess)="gridComponent.reloadData()"></add-button>' +
    '<base-data-grid entity="Lieferant" #gridComponent></base-data-grid>'
})

export class Lieferant {}