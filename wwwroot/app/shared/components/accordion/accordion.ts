import {Component, Input, ContentChildren, QueryList, forwardRef} from '@angular/core';
import {AccordionItem} from './accordion-item';

@Component({
    exportAs: 'accordion',
    selector: 'accordion',
    template: `
        <div class="accordion">
            <ng-content></ng-content>
        </div>
    `
})
export class AccordionComponent {
    
    @Input() multiple: boolean = true
    
    @ContentChildren(forwardRef(() => AccordionItem)) items: QueryList<AccordionItem>;
    
    constructor() {}
    
    didItemToggled(item: AccordionItem) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function(i) { 
                if (i !== item) {
                    i.applyToggle(true)
                }
            });
        }
    }
}