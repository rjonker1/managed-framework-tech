import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Configuration } from '../../app.constants';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    ngOnInit() {
        console.log('ngOnInit _securityService.AuthorizedCallback');

       // if (window.location.hash) {
       //     //this.securityService.AuthorizedCallback();
       // }
    }

    login() {
        console.log('Do login logic');
        //this.securityService.Authorize();
    }

    logout() {
        console.log('Do logout logic');
        //this.securityService.Logoff();
    }
}
