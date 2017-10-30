import { Component, TemplateRef, Output, EventEmitter  } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import 'moment';
import 'rxjs/add/operator/map'

@Component({
    selector: 'add-button',
    templateUrl: '/app/addbutton.component.html'
})

export class AddButton {
    @Output() onSuccess = new EventEmitter();
    public bsConfig: Partial<BsDatepickerConfig>;
    public gasarten: Array<any> = [];
    public herkuenfte: Array<any> = [];
    public lieferanten: Array<any> = [];
    public spediteure: Array<any> = [];
    public modalRef: BsModalRef;
    public model: any = {
        LIEF_NR: "",
        Kennzeichen: "",
        Spediteur: "",
        Herkunft: "",
        Gasart: "",
        Lieferant: "",
        DAT_Zugang: new Date(2017, 5, 10),
        DAT_Abgang: "",
        Menge: "",
        Bemerkung: ""
    };

    constructor(private http: Http, private modalService: BsModalService) {
        //this.bsConfig = Object.assign({}, { locale: 'de' });

        http.get('/api/GasArt')
            .map(res => res.json())
            .subscribe(gasarten => {
                this.gasarten = gasarten;
            });
        http.get('/api/Spediteur')
            .map(res => res.json())
            .subscribe(spediteure => {
                this.spediteure = spediteure;
            });
        http.get('/api/Herkunft')
            .map(res => res.json())
            .subscribe(herkuenfte => {
                this.herkuenfte = herkuenfte;
            });
        http.get('/api/Lieferant')
            .map(res => res.json())
            .subscribe(lieferanten => {
                this.lieferanten = lieferanten;
            });
    }

    public onSave(): void {
        this.modalRef.hide();
        this.http.post('/api/Zollerfassung', this.model).subscribe(data => {
            this.onSuccess.emit(null);
        });
    }

    public openModal(template: TemplateRef<any>): void {
        this.modalRef = this.modalService.show(template);
    }
}