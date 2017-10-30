import { Component } from '@angular/core';
import { BaseDataGrid } from './baseDatagrid.component';
import { AddButton } from './addButton.component';

@Component({
    selector: 'spediteur',
    template: '<add-button-base entity="Spediteur" (onSuccess)="gridComponent.reloadData()"></add-button-base>' +
    '<base-data-grid entity="Spediteur" #gridComponent></base-data-grid>'
})

export class Spediteur {}