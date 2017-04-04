import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/index';
import { ForbiddenComponent } from './components/forbidden/index'
import { UnauthorizedComponent } from './components/unauthorized/index'

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'Forbidden', component: ForbiddenComponent },
    { path: 'Unauthorized', component: UnauthorizedComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);