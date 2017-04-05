import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OidcSecurityService } from '../auth/index';

@Injectable()
export class HasAdminRoleAuthenticationGuard implements CanActivate {
    constructor(private router: Router, public securityService: OidcSecurityService) {
        
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url = state.url;
        return false;
       // return this.securityService.HasUserAdminRole && this.securityService.IsAuthorized();
    }
}