import { Component } from '@angular/core';
import { DataGrid } from './datagrid.component';
import { AddButton } from './addButton.component';
import { BaseDataGrid } from './baseDatagrid.component';
import { Zollerfassung } from './zollerfassung.component';
import { Lieferant } from './lieferant.component';
import { Spediteur } from './spediteur.component';
import { Gasart } from './gasart.component';
import { Herkunft } from './herkunft.component';
import { AddButtonBase } from './addbuttonBase.component';

@Component({
    selector: 'main',
    template: '<router-outlet></router-outlet>'
})

export class Main {}