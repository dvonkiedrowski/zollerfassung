import { Component, TemplateRef, Output, EventEmitter, Input  } from '@angular/core';
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
    public bsConfig: Partial<BsDatepickerConfig>;
    public modalRef: BsModalRef;
    public model: any = {
        Name: ""
    };

    constructor(private http: Http, private modalService: BsModalService) {

    }

    public onSave(): void {
        this.modalRef.hide();
        this.http.post('/api/' + this.entity, this.model).subscribe(data => {
            this.onSuccess.emit(null);
        });
    }

    public openModal(template: TemplateRef<any>): void {
        this.modalRef = this.modalService.show(template);
    }
}