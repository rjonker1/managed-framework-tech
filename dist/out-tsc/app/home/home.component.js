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
import { Router } from '@angular/router';
import { TagsService, UserService } from '../shared';
export var HomeComponent = (function () {
    function HomeComponent(router, tagsService, userService) {
        this.router = router;
        this.tagsService = tagsService;
        this.userService = userService;
        this.tags = [];
        this.tagsLoaded = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        // this.userService.isAuthenticated.subscribe(
        //   (authenticated) => {
        //     this.isAuthenticated = authenticated;
        //     // // set the article list accordingly
        //     // if (authenticated) {
        //     //   this.setListTo('feed');
        //     // } else {
        //     //   this.setListTo('all');
        //     // }
        //   }
        // );
        // this.tagsService.getAll()
        // .subscribe(tags => {
        //   this.tags = tags;
        //   this.tagsLoaded = true;
        // });
    };
    HomeComponent.prototype.setListTo = function (type, filters) {
        if (type === void 0) { type = ''; }
        if (filters === void 0) { filters = {}; }
        // // If feed is requested but user is not authenticated, redirect to login
        // if (type === 'feed' && !this.isAuthenticated) {
        //   this.router.navigateByUrl('/login');
        //   return;
    };
    HomeComponent = __decorate([
        Component({
            selector: 'home-page',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }), 
        __metadata('design:paramtypes', [Router, TagsService, UserService])
    ], HomeComponent);
    return HomeComponent;
}());
//}
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/home/home.component.js.map