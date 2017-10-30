"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ng2_table_1 = require("ng2-table/ng2-table");
//import { defineLocale } from 'ngx-bootstrap/bs-moment';
//import { de } from 'ngx-bootstrap/locale';
var datagrid_component_1 = require("./datagrid.component");
var lieferant_component_1 = require("./lieferant.component");
var baseDatagrid_component_1 = require("./baseDatagrid.component");
var addButton_component_1 = require("./addButton.component");
var zollerfassung_component_1 = require("./zollerfassung.component");
var main_component_1 = require("./main.component");
var spediteur_component_1 = require("./spediteur.component");
var gasart_component_1 = require("./gasart.component");
var herkunft_component_1 = require("./herkunft.component");
var addbuttonBase_component_1 = require("./addbuttonBase.component");
var appRoutes = [
    { path: 'lieferant', component: lieferant_component_1.Lieferant },
    { path: 'spediteur', component: spediteur_component_1.Spediteur },
    { path: 'gasart', component: gasart_component_1.Gasart },
    { path: 'herkunft', component: herkunft_component_1.Herkunft },
    { path: 'zollerfassung', component: zollerfassung_component_1.Zollerfassung },
    {
        path: '',
        redirectTo: '/zollerfassung',
        pathMatch: 'full'
    },
    { path: '**', component: zollerfassung_component_1.Zollerfassung }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
            ),
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_bootstrap_1.ModalModule.forRoot(),
            ngx_bootstrap_1.BsDatepickerModule.forRoot(),
            ngx_bootstrap_1.PaginationModule.forRoot(),
            ng2_table_1.Ng2TableModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            datagrid_component_1.DataGrid,
            addButton_component_1.AddButton,
            main_component_1.Main,
            baseDatagrid_component_1.BaseDataGrid,
            lieferant_component_1.Lieferant,
            spediteur_component_1.Spediteur,
            herkunft_component_1.Herkunft,
            gasart_component_1.Gasart,
            zollerfassung_component_1.Zollerfassung,
            addbuttonBase_component_1.AddButtonBase
        ],
        bootstrap: [main_component_1.Main]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map