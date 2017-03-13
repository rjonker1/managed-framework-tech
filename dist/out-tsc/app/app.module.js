var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import { RegistrationModule } from './registration/registration.module';
import { ApiService, AuthGuard, FooterComponent, HeaderComponent, JwtService, ProfilesService, SharedModule, TagsService, UserService } from './shared';
var rootRouting = RouterModule.forRoot([], { useHash: true });
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                FooterComponent,
                HeaderComponent
            ],
            imports: [
                BrowserModule,
                AuthModule,
                HomeModule,
                ProfileModule,
                rootRouting,
                SharedModule,
                SettingsModule,
                RegistrationModule
            ],
            providers: [
                ApiService,
                AuthGuard,
                JwtService,
                ProfilesService,
                TagsService,
                UserService
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/app.module.js.map