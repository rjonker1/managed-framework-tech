import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { ProfileModule } from './components/profile/profile.module';
import { SettingsModule } from './settings/settings.module';

import { ProfileResolver } from '../app/components/profile/profile-resolver.service';

import {
    ApiService,
    AuthGuard,
    FooterComponent,
    HeaderComponent,
    JwtService,
    ProfilesService,
    SharedModule,
    //TagsService,
    UserService
} from './shared';

import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent, 
        //ProfileComponent
    ],
    providers: [
        ApiService,
        AuthGuard,
        JwtService,
        ProfilesService,
        //TagsService,
        UserService
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ProfileModule,
        SharedModule,
        SettingsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'profile/:username', component: ProfileComponent,
                resolve: {
                    profile: ProfileResolver
                } //,
                //children: [
                //    {
                //        path: '',
                //        //component: ProfileArticlesComponent
                //    },
                //    {
                //        path: 'favorites',
                //        //component: ProfileFavoritesComponent
                //    }
                //]
            },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ]),
    
    ]
})
export class AppModule {
}
