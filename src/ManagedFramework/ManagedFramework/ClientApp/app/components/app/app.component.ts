import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements CanActivate  {

    currentUser: User;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }   

    canActivate() {
        return this.currentUser != null;
    }
}