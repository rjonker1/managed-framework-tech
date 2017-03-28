import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


import { OidcSecurityService } from '../../_authentication/services/oidc.security.service';
import { UserManagementService } from '../../_services/usermanagement.service';
import { User } from '../../_models/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'user-management',
    templateUrl: 'user-management.component.html'
})

export class UserManagementComponent implements OnInit {

    public message: string;
    public Users: User[];

    constructor(
        private _userManagementService: UserManagementService,
        public securityService: OidcSecurityService,
        private _router: Router) {
        this.message = 'user-management';
    }

    ngOnInit() {
        this.getData();
    }

    private getData() {
        console.log('User Management:getData starting...');
        this._userManagementService
            .GetAll()
            .subscribe(data => this.Users = data,
            error => this.securityService.HandleError(error),
            () => console.log('User Management Get all completed'));
    }

    public Update(user: User) {
        this._userManagementService.Update(user.id, user)
            .subscribe((() => console.log('subscribed')),
            error => this.securityService.HandleError(error),
            () => console.log('update request sent!'));
    }

}
