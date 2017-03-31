import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Configuration } from '../../app.constants';

import { OidcSecurityService } from '../../_authentication/index';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: [] //'./app.component.css'
})
export class AppComponent implements OnInit  {

    constructor(public securityService: OidcSecurityService) {
    }

    ngOnInit() {
        console.log('ngOnInit _securityService.AuthorizedCallback');

        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }
    }

    public Login() {
        console.log('Do login logic');
        this.securityService.Authorize();
    }

    public Logout() {
        console.log('Do logout logic');
        this.securityService.Logoff();
    }

    //currentUser: User;

    //constructor(private userService: UserService) {
    //    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //}   

    //canActivate() {
    //    return this.currentUser != null;
    //}
}