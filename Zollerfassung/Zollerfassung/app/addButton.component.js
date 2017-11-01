"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ngx_bootstrap_1 = require("ngx-bootstrap");
require("moment");
require("rxjs/add/operator/map");
var AddButton = (function () {
    function AddButton(http, modalService) {
        //this.bsConfig = Object.assign({}, { locale: 'de' });
        var _this = this;
        this.http = http;
        this.modalService = modalService;
        this.onSuccess = new core_1.EventEmitter();
        this.gasarten = [];
        this.herkuenfte = [];
        this.lieferanten = [];
        this.spediteure = [];
        this.model = {
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
        http.get('/api/GasArt')
            .map(function (res) { return res.json(); })
            .subscribe(function (gasarten) {
            _this.gasarten = gasarten;
        });
        http.get('/api/Spediteur')
            .map(function (res) { return res.json(); })
            .subscribe(function (spediteure) {
            _this.spediteure = spediteure;
        });
        http.get('/api/Herkunft')
            .map(function (res) { return res.json(); })
            .subscribe(function (herkuenfte) {
            _this.herkuenfte = herkuenfte;
        });
        http.get('/api/Lieferant')
            .map(function (res) { return res.json(); })
            .subscribe(function (lieferanten) {
            _this.lieferanten = lieferanten;
        });
    }
    AddButton.prototype.onSave = function () {
        var _this = this;
        this.modalRef.hide();
        if (this.model.ID) {
            this.http.put('/api/Zollerfassung/' + this.model.ID, this.model).subscribe(function (data) {
                _this.onSuccess.emit(null);
            });
        }
        else {
            this.http.post('/api/Zollerfassung', this.model).subscribe(function (data) {
                _this.onSuccess.emit(null);
            });
        }
    };
    AddButton.prototype.onCancellation = function () {
        this.model.Storniert = true;
        this.onSave();
    };
    AddButton.prototype.openModal = function () {
        this.modalRef = this.modalService.show(this.templateref);
    };
    AddButton.prototype.openEditModal = function (data) {
        this.model = Object.assign({}, data);
        // workaround for binding to entities
        this.model.Spediteur = this.spediteure.find(function (s) {
            return s.ID === data.Spediteur.ID && s.Name === data.Spediteur.Name;
        });
        this.model.Lieferant = this.lieferanten.find(function (s) {
            return s.ID === data.Lieferant.ID && s.Name === data.Lieferant.Name;
        });
        this.model.Herkunft = this.herkuenfte.find(function (s) {
            return s.ID === data.Herkunft.ID && s.Name === data.Herkunft.Name;
        });
        this.model.Gasart = this.gasarten.find(function (s) {
            return s.ID === data.Gasart.ID && s.Name === data.Gasart.Name;
        });
        this.modalRef = this.modalService.show(this.templateref);
    };
    return AddButton;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddButton.prototype, "onSuccess", void 0);
__decorate([
    core_1.ViewChild('template'),
    __metadata("design:type", core_1.TemplateRef)
], AddButton.prototype, "templateref", void 0);
AddButton = __decorate([
    core_1.Component({
        selector: 'add-button',
        templateUrl: '/app/addbutton.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, ngx_bootstrap_1.BsModalService])
], AddButton);
exports.AddButton = AddButton;
//# sourceMappingURL=addButton.component.js.map