var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { AccordionItem } from './accordion-item';
export var AccordionComponent = (function () {
    function AccordionComponent() {
        this.multiple = true;
    }
    AccordionComponent.prototype.didItemToggled = function (item) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item) {
                    i.applyToggle(true);
                }
            });
        }
    };
    __decorate([
        Input(), 
        __metadata('design:type', Boolean)
    ], AccordionComponent.prototype, "multiple", void 0);
    __decorate([
        ContentChildren(forwardRef(function () { return AccordionItem; })), 
        __metadata('design:type', QueryList)
    ], AccordionComponent.prototype, "items", void 0);
    AccordionComponent = __decorate([
        Component({
            exportAs: 'accordion',
            selector: 'accordion',
            template: "\n        <div class=\"accordion\">\n            <ng-content></ng-content>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AccordionComponent);
    return AccordionComponent;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/shared/components/accordion/accordion.js.map