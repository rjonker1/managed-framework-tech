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
import { AccordionItem } from './accordion-item';
export var AccordionItemHead = (function () {
    function AccordionItemHead(accordionItem) {
        this.accordionItem = accordionItem;
    }
    AccordionItemHead.prototype.toggleClick = function (event) {
        event.preventDefault();
        this.accordionItem.collapsed = !this.accordionItem.collapsed;
        this.accordionItem.toggle(this.accordionItem.collapsed);
    };
    AccordionItemHead = __decorate([
        Component({
            exportAs: 'accordionItemHead',
            selector: 'accordion-item-head',
            template: "\n        <div class=\"accordion-item-head\">\n            <a role=\"button\" (click)=\"toggleClick($event)\"><ng-content></ng-content><span class=\"toggle-icon\"></span></a>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [AccordionItem])
    ], AccordionItemHead);
    return AccordionItemHead;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/shared/components/accordion/accordion-item-head.js.map