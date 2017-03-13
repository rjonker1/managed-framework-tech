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
import { AuthGuard, SharedModule } from '../shared';
import { RegistrationComponent } from './registration.component';
import { AccordionComponent } from '../shared/components/accordion/accordion';
import { AccordionItem } from '../shared/components/accordion/accordion-item';
import { AccordionItemHead } from '../shared/components/accordion/accordion-item-head';
import { AccordionItemBody } from '../shared/components/accordion/accordion-item-body';
export var ACCORDION_COMPONENTS = [AccordionComponent, AccordionItem, AccordionItemHead, AccordionItemBody];
var registrationRouting = RouterModule.forChild([
    {
        path: 'registration',
        component: RegistrationComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'registration/:slug',
        component: RegistrationComponent,
        canActivate: [AuthGuard] //,
    }
]);
export var RegistrationModule = (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        NgModule({
            imports: [
                registrationRouting,
                SharedModule
            ],
            declarations: [
                RegistrationComponent,
                ACCORDION_COMPONENTS
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationModule);
    return RegistrationModule;
}());
export * from '../shared/components/accordion/accordion-item';
export * from '../shared/components/accordion/accordion-item-head';
export * from '../shared/components/accordion/accordion-item-body';
export * from '../shared/components/accordion/accordion';
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/registration/registration.module.js.map