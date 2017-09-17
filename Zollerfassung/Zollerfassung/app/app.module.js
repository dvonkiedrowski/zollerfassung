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
var forms_1 = require("@angular/forms");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ng2_table_1 = require("ng2-table/ng2-table");
var datagrid_component_1 = require("./datagrid.component");
var addButton_component_1 = require("./addButton.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ngx_bootstrap_1.ModalModule.forRoot(),
            ngx_bootstrap_1.BsDatepickerModule.forRoot(),
            ngx_bootstrap_1.PaginationModule.forRoot(),
            ng2_table_1.Ng2TableModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [datagrid_component_1.DataGrid, addButton_component_1.AddButton],
        bootstrap: [datagrid_component_1.DataGrid, addButton_component_1.AddButton]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map