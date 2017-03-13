var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';
export var AccordionItemBody = (function () {
    function AccordionItemBody(renderer) {
        this.renderer = renderer;
        this.height = '0';
    }
    AccordionItemBody.prototype.toggle = function (collapsed) {
        var _this = this;
        var height = '0';
        if (!collapsed) {
            this.renderer.setElementStyle(this.bodyEl.nativeElement, 'height', 'auto');
            height = this.bodyEl.nativeElement.offsetHeight + 'px';
            this.renderer.setElementStyle(this.bodyEl.nativeElement, 'height', '0');
        }
        setTimeout(function () { return _this.height = height; }, 50);
    };
    __decorate([
        ViewChild('body'), 
        __metadata('design:type', ElementRef)
    ], AccordionItemBody.prototype, "bodyEl", void 0);
    AccordionItemBody = __decorate([
        Component({
            exportAs: 'accordionItemBody',
            selector: 'accordion-item-body',
            template: "\n        <div #body class=\"accordion-item-body\" [style.height]=\"height\">\n            <div class=\"inner\"><ng-content></ng-content></div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [Renderer])
    ], AccordionItemBody);
    return AccordionItemBody;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/shared/components/accordion/accordion-item-body.js.map