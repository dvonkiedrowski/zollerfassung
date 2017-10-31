import { Component } from '@angular/core';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'spediteur',
    template: '<add-button-base #buttonComponent entity="Spediteur" (onSuccess)="gridComponent.reloadData()"></add-button-base>' +
    '<base-data-grid (onClick)="buttonComponent.openEditModal($event)" entity="Spediteur" #gridComponent></base-data-grid>'
})

export class Spediteur {}