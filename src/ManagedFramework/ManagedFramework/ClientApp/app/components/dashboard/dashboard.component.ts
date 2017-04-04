import { Component, OnInit } from '@angular/core';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'dashboard-page',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {

    }
}