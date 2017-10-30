import { Component } from '@angular/core';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'herkunft',
    template: '<add-button-base entity="Herkunft" (onSuccess)="gridComponent.reloadData()"></add-button-base>' +
    '<base-data-grid entity="Herkunft" #gridComponent></base-data-grid>'
})

export class Herkunft {}