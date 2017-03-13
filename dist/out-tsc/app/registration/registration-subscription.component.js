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
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared';
import { Subscription } from '../shared/models/subscription.model';
export var RegistrationSubscriptionTypeComponent = (function () {
    function RegistrationSubscriptionTypeComponent(router, userService, formBuilder) {
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.subscription = new Subscription();
        this.errors = {};
        this.isSubmitting = false;
        this.subscriptionTypes = [
            { id: 1, name: '3 Sites for R3000 per month' }
        ];
        this.subscriptionForm = this.formBuilder.group({
            subscriptionTypes: this.subscriptionTypes,
            subscriptionType: 0
        });
    }
    RegistrationSubscriptionTypeComponent.prototype.ngOnInit = function () {
        //Need to do this
        //(<any>Object).assign(this.subscription, this.registrationService.getCurrentSubscription());
        Object.assign(this.subscription, new Subscription());
        this.subscriptionForm.patchValue(this.subscription);
    };
    RegistrationSubscriptionTypeComponent.prototype.submitForm = function () {
        this.isSubmitting = true;
        this.updateSubscription(this.subscriptionForm.value);
    };
    RegistrationSubscriptionTypeComponent.prototype.updateSubscription = function (values) {
        Object.assign(this.subscription, values);
    };
    RegistrationSubscriptionTypeComponent = __decorate([
        Component({
            selector: 'registration-subscription-page',
            templateUrl: './registration-subscription.component.html'
        }), 
        __metadata('design:paramtypes', [Router, UserService, FormBuilder])
    ], RegistrationSubscriptionTypeComponent);
    return RegistrationSubscriptionTypeComponent;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/registration/registration-subscription.component.js.map