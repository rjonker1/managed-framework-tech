import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router'

import { User, UserService } from '../shared';
import { Subscription } from '../shared/models/subscription.model'
import { SubscriptionType } from '../shared/models/subscription.type.model'

@Component({
    selector: 'registration-subscription-page',
    templateUrl: './registration-subscription.component.html'
})

export class RegistrationSubscriptionTypeComponent implements OnInit {
    subscription: Subscription = new Subscription();
    errors: Object = {};
    isSubmitting: boolean = false;
    subscriptionForm: FormGroup

    public subscriptionTypes: Array<SubscriptionType> = [
        {id: 1, name: '3 Sites for R3000 per month'}
    ];

    constructor(
        private router: Router,
        private userService: UserService,
        private formBuilder: FormBuilder
    ) {

        this.subscriptionForm = this.formBuilder.group({
            subscriptionTypes: this.subscriptionTypes,
            subscriptionType: 0
        });
    }

    ngOnInit(){
        //Need to do this
        //(<any>Object).assign(this.subscription, this.registrationService.getCurrentSubscription());
        (<any>Object).assign(this.subscription, new Subscription())
        this.subscriptionForm.patchValue(this.subscription)
    }

    submitForm() {
        this.isSubmitting = true;
        this.updateSubscription(this.subscriptionForm.value);

    }

    updateSubscription(values: Object) {
        (<any>Object).assign(this.subscription, values);
    }
}