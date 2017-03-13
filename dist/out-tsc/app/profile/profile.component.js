var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared';
export var ProfileComponent = (function () {
    function ProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.profile = data.profile;
        });
        // Load the current user's data
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
            _this.isUser = (_this.currentUser.username === _this.profile.username);
        });
    };
    ProfileComponent.prototype.onToggleFollowing = function (following) {
        this.profile.following = following;
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'profile-page',
            templateUrl: './profile.component.html'
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/profile/profile.component.js.map