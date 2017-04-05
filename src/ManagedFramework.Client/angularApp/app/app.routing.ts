import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/index';
import { ForbiddenComponent } from './components/forbidden/index'
import { UnauthorizedComponent } from './components/unauthorized/index'

import { HasAdminRoleAuthenticationGuard, HasAdminRoleCanLoadGuard } from './_guards/index'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'home', component: HomeComponent,
        canActivate: [HasAdminRoleAuthenticationGuard],
        canLoad: [HasAdminRoleCanLoadGuard]
    },
    { path: 'Forbidden', component: ForbiddenComponent },
    { path: 'Unauthorized', component: UnauthorizedComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);