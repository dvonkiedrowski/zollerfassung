import { Component, TemplateRef, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { Http } from '@angular/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import 'moment';
import 'rxjs/add/operator/map'

@Component({
    selector: 'add-button-base',
    templateUrl: '/app/addbuttonBase.component.html'
})

export class AddButtonBase {
    @Input() entity: string; 
    @Output() onSuccess = new EventEmitter();
    @ViewChild('template') templateref: TemplateRef<any>;
    public bsConfig: Partial<BsDatepickerConfig>;
    public modalRef: BsModalRef;
    public model: any = {
        Name: ""
    };

    constructor(private http: Http, private modalService: BsModalService) {

    }

    public onSave(): void {
        this.modalRef.hide();
        if (this.model.ID) {
            this.http.put('/api/' + this.entity + '/' + this.model.ID, this.model).subscribe(data => {
                this.onSuccess.emit(null);
            });
        } else {
            this.http.post('/api/' + this.entity, this.model).subscribe(data => {
                this.onSuccess.emit(null);
            });
        }
    }

    public openModal(): void {
        this.modalRef = this.modalService.show(this.templateref);
    }

    public openEditModal(data: any): void {
        this.model = Object.assign({}, data);
        this.modalRef = this.modalService.show(this.templateref);
    }
}