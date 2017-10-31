import { Component, TemplateRef, Output, EventEmitter, ViewChild } from '@angular/core';
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
    @ViewChild('template') templateref: TemplateRef<any>;
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
        if (this.model.ID) {
            this.http.put('/api/Zollerfassung/' + this.model.ID, this.model).subscribe(data => {
                this.onSuccess.emit(null);
            });
        } else {
            this.http.post('/api/Zollerfassung', this.model).subscribe(data => {
                this.onSuccess.emit(null);
            });
        }
    }

    public onCancellation(): void {
        this.model.Storno = true;
        this.onSave();
    }

    public openModal(): void {
        this.modalRef = this.modalService.show(this.templateref);
    }

    public openEditModal(data: any): void {
        this.model = Object.assign({}, data);

        // workaround for binding to entities
        this.model.Spediteur = this.spediteure.find(function (s) {
            return s.ID === data.Spediteur.ID && s.Name === data.Spediteur.Name;
        });
        this.model.Lieferant = this.lieferanten.find(function (s) {
            return s.ID === data.Lieferant.ID && s.Name === data.Lieferant.Name;
        }); this.model.Herkunft = this.herkuenfte.find(function (s) {
            return s.ID === data.Herkunft.ID && s.Name === data.Herkunft.Name;
        }); this.model.Gasart = this.gasarten.find(function (s) {
            return s.ID === data.Gasart.ID && s.Name === data.Gasart.Name;
        });

        this.modalRef = this.modalService.show(this.templateref);
    }
}