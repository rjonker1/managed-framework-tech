var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ContentChild, Input, Inject, forwardRef } from '@angular/core';
import { AccordionItemBody } from './accordion-item-body';
import { AccordionComponent } from './accordion';
export var AccordionItem = (function () {
    function AccordionItem(accordion) {
        this.collapsed = true;
        this.accordion = accordion;
    }
    AccordionItem.prototype.ngAfterViewInit = function () {
        this.body.toggle(this.collapsed);
    };
    AccordionItem.prototype.toggle = function (collapsed) {
        this.accordion.didItemToggled(this);
        this.applyToggle(collapsed);
    };
    AccordionItem.prototype.applyToggle = function (collapsed) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    };
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], AccordionItem.prototype, "collapsed", void 0);
    __decorate([
        ContentChild(AccordionItemBody), 
        __metadata('design:type', AccordionItemBody)
    ], AccordionItem.prototype, "body", void 0);
    AccordionItem = __decorate([
        Component({
            exportAs: 'accordionItem',
            selector: 'accordion-item',
            template: "\n        <div class=\"accordion-item\" [ngClass]=\"{'is-collapsed': collapsed}\">\n            <ng-content></ng-content>\n        </div>\n    "
        }),
        __param(0, Inject(forwardRef(function () { return AccordionComponent; }))), 
        __metadata('design:paramtypes', [AccordionComponent])
    ], AccordionItem);
    return AccordionItem;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/shared/components/accordion/accordion-item.js.map