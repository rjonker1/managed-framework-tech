import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { routing } from './app.routing';
import { Configuration } from './app.constants';

import { ForbiddenComponent } from './components/forbidden/index';
import { UnauthorizedComponent } from './components/unauthorized/index';
import { HomeComponent } from './components/home/index';

import { HasAdminRoleAuthenticationGuard, HasAdminRoleCanLoadGuard } from './_guards/index';
import { AuthModule } from './auth/index';

@NgModule({
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
        NavMenuComponent,
        ForbiddenComponent,
        HomeComponent,
        UnauthorizedComponent,
        //DataEventRecordsListComponent,
        //DataEventRecordsCreateComponent,
        //DataEventRecordsEditComponent,
        //UserManagementComponent
    ],
    providers: [
        //DataEventRecordsService,
        //UserManagementService,
        Configuration,
        HasAdminRoleAuthenticationGuard,
        HasAdminRoleCanLoadGuard
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }
