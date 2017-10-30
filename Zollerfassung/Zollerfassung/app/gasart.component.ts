import { Component } from '@angular/core';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'gasart',
    template: '<add-button-base entity="Gasart" (onSuccess)="gridComponent.reloadData()"></add-button-base>' +
    '<base-data-grid entity="Gasart" #gridComponent></base-data-grid>'
})

export class Gasart {}