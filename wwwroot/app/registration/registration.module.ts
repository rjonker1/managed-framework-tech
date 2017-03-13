import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, SharedModule } from '../shared';


//import { EditableRegistrationResolver } from './editable-registration-resolver.service';
import { RegistrationComponent } from './registration.component'

import { AccordionComponent } from '../shared/components/accordion/accordion'
import { AccordionItem } from '../shared/components/accordion/accordion-item';
import { AccordionItemHead } from '../shared/components/accordion/accordion-item-head';
import { AccordionItemBody } from '../shared/components/accordion/accordion-item-body';

export const ACCORDION_COMPONENTS = [AccordionComponent, AccordionItem, AccordionItemHead, AccordionItemBody];


const registrationRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'registration',
        component: RegistrationComponent,
        canActivate: [AuthGuard]
    },    
    {
        path: 'registration/:slug',
        component: RegistrationComponent,
        canActivate: [AuthGuard] //,
        // resolve: {
        //     registration: 
        // }
    }
]);

@NgModule({
    imports:[
        registrationRouting,
        SharedModule
    ],
    declarations: [
        RegistrationComponent,
        ACCORDION_COMPONENTS
    ],
    providers: [

    ]
})

export class RegistrationModule{}

export * from '../shared/components/accordion/accordion-item';
export * from '../shared/components/accordion/accordion-item-head';
export * from '../shared/components/accordion/accordion-item-body';
export * from '../shared/components/accordion/accordion';