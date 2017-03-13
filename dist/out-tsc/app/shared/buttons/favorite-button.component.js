var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services';
export var FavoriteButtonComponent = (function () {
    function FavoriteButtonComponent(
        //private articlesService: ArticlesService,
        router, userService) {
        this.router = router;
        this.userService = userService;
        //@Input() article: Article;
        this.onToggle = new EventEmitter();
        this.isSubmitting = false;
    }
    FavoriteButtonComponent.prototype.toggleFavorite = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.subscribe(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return;
            }
            // // Favorite the article if it isn't favorited yet
            // if (!this.article.favorited) {
            //   this.articlesService.favorite(this.article.slug)
            //   .subscribe(
            //     data => {
            //       this.isSubmitting = false;
            //       this.onToggle.emit(true);
            //     },
            //     err => this.isSubmitting = false
            //   );
            // // Otherwise, unfavorite the article
            // } else {
            //   this.articlesService.unfavorite(this.article.slug)
            //   .subscribe(
            //     data => {
            //       this.isSubmitting = false;
            //       this.onToggle.emit(false);
            //     },
            //     err => this.isSubmitting = false
            //   );
            // }
        });
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], FavoriteButtonComponent.prototype, "onToggle", void 0);
    FavoriteButtonComponent = __decorate([
        Component({
            selector: 'favorite-button',
            templateUrl: './favorite-button.component.html'
        }), 
        __metadata('design:paramtypes', [Router, UserService])
    ], FavoriteButtonComponent);
    return FavoriteButtonComponent;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/shared/buttons/favorite-button.component.js.map