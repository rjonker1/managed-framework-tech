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
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileResolver } from './profile-resolver.service';
import { SharedModule } from '../shared';
var profileRouting = RouterModule.forChild([
    {
        path: 'profile/:username',
        component: ProfileComponent,
        resolve: {
            profile: ProfileResolver
        },
        children: [
            {
                path: '',
            },
            {
                path: 'favorites',
            }
        ]
    }
]);
export var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        NgModule({
            imports: [
                profileRouting,
                SharedModule
            ],
            declarations: [
                //ProfileArticlesComponent,
                ProfileComponent,
            ],
            providers: [
                ProfileResolver
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProfileModule);
    return ProfileModule;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/profile/profile.module.js.map