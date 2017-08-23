import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgFor } from '@angular/common';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { AppComponent } from './app.component';
  
@NgModule({
    imports: [BrowserModule, HttpModule, Ng2TableModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
  
export class AppModule { }