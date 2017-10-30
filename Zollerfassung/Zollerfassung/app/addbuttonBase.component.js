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
var AddButtonBase = (function () {
    function AddButtonBase(http, modalService) {
        this.http = http;
        this.modalService = modalService;
        this.onSuccess = new core_1.EventEmitter();
        this.model = {
            Name: ""
        };
    }
    AddButtonBase.prototype.onSave = function () {
        var _this = this;
        this.modalRef.hide();
        this.http.post('/api/' + this.entity, this.model).subscribe(function (data) {
            _this.onSuccess.emit(null);
        });
    };
    AddButtonBase.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    return AddButtonBase;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AddButtonBase.prototype, "entity", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddButtonBase.prototype, "onSuccess", void 0);
AddButtonBase = __decorate([
    core_1.Component({
        selector: 'add-button-base',
        templateUrl: '/app/addbuttonBase.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, ngx_bootstrap_1.BsModalService])
], AddButtonBase);
exports.AddButtonBase = AddButtonBase;
//# sourceMappingURL=addbuttonBase.component.js.map