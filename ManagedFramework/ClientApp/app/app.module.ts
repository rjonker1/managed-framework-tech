import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { FooterComponent } from './_layout/index'

import { routing } from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';

import { LoginComponent } from './components/login/index';
import { RegisterComponent } from './components/register/index';
import { HomeComponent } from './components/home/index';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        NavMenuComponent,
        FooterComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ]
})

export class AppModule { }

//import { ProfileModule } from './components/profile/profile.module';
//import { SettingsModule } from './settings/settings.module';

//import { ProfileResolver } from '../app/components/profile/profile-resolver.service';

//import {
//    ApiService,
//    AuthGuard,
//    FooterComponent,
//    HeaderComponent,
//    JwtService,
//    ProfilesService,
//    SharedModule,
//    //TagsService,
//    UserService
//} from './shared';

//import { ProfileComponent } from './components/profile/profile.component';



//@NgModule({
//    bootstrap: [ AppComponent ],
//    declarations: [
//        AppComponent,
//        FooterComponent,
//        HeaderComponent,
//        NavMenuComponent,
//        CounterComponent,
//        FetchDataComponent,
//        HomeComponent, 
//        //ProfileComponent
//    ],
//    providers: [
//        ApiService,
//        AuthGuard,
//        JwtService,
//        ProfilesService,
//        //TagsService,
//        UserService
//    ],
//    imports: [
//        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
//        ProfileModule,
//        SharedModule,
//        SettingsModule,
//        RouterModule.forRoot([
//            { path: '', redirectTo: 'home', pathMatch: 'full' },
//            { path: 'home', component: HomeComponent },
//            { path: 'profile', component: ProfileComponent },
//            { path: 'profile/:username', component: ProfileComponent,
//                resolve: {
//                    profile: ProfileResolver
//                } //,
//                //children: [
//                //    {
//                //        path: '',
//                //        //component: ProfileArticlesComponent
//                //    },
//                //    {
//                //        path: 'favorites',
//                //        //component: ProfileFavoritesComponent
//                //    }
//                //]
//            },
//            { path: 'counter', component: CounterComponent },
//            { path: 'fetch-data', component: FetchDataComponent },
//            { path: '**', redirectTo: 'home' }
//        ]),
    
//    ]
//})
//export class AppModule {
//}
