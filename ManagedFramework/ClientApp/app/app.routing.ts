import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/index';
import { ForbiddenComponent } from './components/forbidden/index';
import { UnauthorizedComponent } from './components/unauthorized/index';

import { LoginComponent } from './components/login/index';
import { ProfileComponent } from './components/profile/index';
import { RegisterComponent, RegisterCompanyComponent } from './components/register/index';
import { DashboardComponent } from './components/dashboard/index';
import { AuthGuard, HasAdminRoleAuthenticationGuard, HasAdminRoleCanLoadGuard } from './_guards/index';

import { UserManagementComponent } from './components/user-management/index';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'Forbidden', component: ForbiddenComponent },
    { path: 'Unauthorized', component: UnauthorizedComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'registerCompany', component: RegisterCompanyComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);