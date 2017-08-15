import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html'
})

export class AppComponent { 
    zollerfassung: object[];

    constructor(http: Http) {
        http.get('/api/Zollerfassung')
            // Call map on the response observable to get the parsed people object
            .map(res => res.json())
            // Subscribe to the observable to get the parsed people object and attach it to the
            // component
            .subscribe(zollerfassung => this.zollerfassung = zollerfassung);
    }
}