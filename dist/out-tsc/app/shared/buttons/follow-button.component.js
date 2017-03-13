var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from '../models';
import { ProfilesService, UserService } from '../services';
export var FollowButtonComponent = (function () {
    function FollowButtonComponent(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.onToggle = new EventEmitter();
        this.isSubmitting = false;
    }
    FollowButtonComponent.prototype.toggleFollowing = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return;
            }
            // Follow this profile if we aren't already
            if (!_this.profile.following) {
                _this.profilesService.follow(_this.profile.username)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; });
            }
            else {
                _this.profilesService.unfollow(_this.profile.username)
                    .subscribe(function (data) {
                    _this.isSubmitting = false;
                    _this.onToggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; });
            }
        });
    };
    __decorate([
        Input(), 
        __metadata('design:type', Profile)
    ], FollowButtonComponent.prototype, "profile", void 0);
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], FollowButtonComponent.prototype, "onToggle", void 0);
    FollowButtonComponent = __decorate([
        Component({
            selector: 'follow-button',
            templateUrl: './follow-button.component.html'
        }), 
        __metadata('design:paramtypes', [ProfilesService, Router, UserService])
    ], FollowButtonComponent);
    return FollowButtonComponent;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/shared/buttons/follow-button.component.js.map