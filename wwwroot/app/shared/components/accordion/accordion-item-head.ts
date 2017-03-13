import {Component} from '@angular/core';
import {AccordionItem} from './accordion-item';

@Component({
    exportAs: 'accordionItemHead',
    selector: 'accordion-item-head',
    template: `
        <div class="accordion-item-head">
            <a role="button" (click)="toggleClick($event)"><ng-content></ng-content><span class="toggle-icon"></span></a>
        </div>
    `
})
export class AccordionItemHead {

    constructor(private accordionItem: AccordionItem) {}
    
    toggleClick(event) {
        event.preventDefault();
        this.accordionItem.collapsed = !this.accordionItem.collapsed;
        this.accordionItem.toggle(this.accordionItem.collapsed);
    }
}
