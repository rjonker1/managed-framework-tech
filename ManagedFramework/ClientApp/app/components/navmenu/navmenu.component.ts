import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../_models/index';
import { UserService } from '../../_services/index';

@Component({
    moduleId: module.id.toString(),
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent  {

    private currentUser: User;

    constructor(private userService: UserService, private _router: Router) {
        
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    //checkCredentials() {
    //    if (localStorage.getItem("currentUser") === null) {
    //        this._router.navigate(['Login']);
    //    }
    //}

    showNavMenu() {       
        if (this.currentUser != null)
        {
            return true;
        }

        this._router.navigate(['Login']);
    }
}
