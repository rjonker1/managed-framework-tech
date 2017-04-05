import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { OidcSecurityService } from '../auth/index';

@Injectable()
export class HasAdminRoleCanLoadGuard implements CanLoad {
    constructor(public securityService: OidcSecurityService) {
        
    }

    canLoad(route: Route): boolean {
        return false;
        //return this.securityService.HasUserAdminRole && this.securityService.IsAuthorized();
    }
}