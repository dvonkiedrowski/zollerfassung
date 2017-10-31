import { Component } from '@angular/core';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'gasart',
    template: '<add-button-base #buttonComponent entity="Gasart" (onSuccess)="gridComponent.reloadData()"></add-button-base>' +
    '<base-data-grid (onClick)="buttonComponent.openEditModal($event)" entity="Gasart" #gridComponent></base-data-grid>'
})

export class Gasart {}