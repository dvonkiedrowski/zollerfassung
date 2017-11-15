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
var router_1 = require("@angular/router");
var Main = (function () {
    function Main(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.mandanten = [];
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.currenturl = event.url; // event.url has current url
            }
        });
        http.get('/api/Mandant')
            .map(function (res) { return res.json(); })
            .subscribe(function (mandanten) {
            _this.mandanten = mandanten;
        });
    }
    Main.prototype.setTenantFilter = function (event) {
        this.http.post('/api/Mandant', this.selectedTenant).subscribe();
    };
    return Main;
}());
Main = __decorate([
    core_1.Component({
        selector: 'main',
        templateUrl: '/app/main.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], Main);
exports.Main = Main;
//# sourceMappingURL=main.component.js.map