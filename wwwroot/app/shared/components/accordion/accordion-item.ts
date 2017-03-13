import {Component, ContentChild, Input, Inject, forwardRef} from '@angular/core';
import {AccordionItemBody} from './accordion-item-body';
import {AccordionComponent} from './accordion';

@Component({
    exportAs: 'accordionItem',
    selector: 'accordion-item',
    template: `
        <div class="accordion-item" [ngClass]="{'is-collapsed': collapsed}">
            <ng-content></ng-content>
        </div>
    `
})
export class AccordionItem {

    private accordion:AccordionComponent;

    @Input() public collapsed: boolean = true;
    
    @ContentChild(AccordionItemBody) body: AccordionItemBody;

    constructor(@Inject(forwardRef(() => AccordionComponent)) accordion: AccordionComponent) {
        this.accordion = accordion;
    }

    ngAfterViewInit() {
        this.body.toggle(this.collapsed);
    }
    toggle(collapsed: boolean) {
        this.accordion.didItemToggled(this);
        this.applyToggle(collapsed);
    }
    
    applyToggle(collapsed: boolean) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    }

}
