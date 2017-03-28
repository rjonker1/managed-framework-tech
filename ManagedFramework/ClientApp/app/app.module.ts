import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './_layout/index'

import { Configuration } from './app.constants';
import { routing } from './app.routing';

import { HttpModule, JsonpModule } from '@angular/http';

import { AlertComponent } from './_directives/index';
import { AuthGuard, HasAdminRoleAuthenticationGuard, HasAdminRoleCanLoadGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService, UserManagementService } from './_services/index';

import { LoginComponent } from './components/login/index';
import { RegisterComponent, RegisterCompanyComponent } from './components/register/index';
import { HomeComponent } from './components/home/index';
import { ProfileComponent } from './components/profile/index';
import { DashboardComponent } from './components/dashboard/index';

import { ForbiddenComponent } from './components/forbidden/index';
import { UnauthorizedComponent } from './components/unauthorized/index';
import { UserManagementComponent } from './components/user-management/index';

import { AuthModule } from './_authentication/index';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        routing,        
        AuthModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        NavMenuComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        RegisterCompanyComponent,
        ProfileComponent,
        DashboardComponent,
        ForbiddenComponent,
        UnauthorizedComponent,
        UserManagementComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        UserManagementService,
        Configuration,
        HasAdminRoleAuthenticationGuard,
        HasAdminRoleCanLoadGuard

        // providers used to create fake backend
        //fakeBackendProvider,
        //MockBackend,
        //BaseRequestOptions
    ]
})

export class AppModule { }