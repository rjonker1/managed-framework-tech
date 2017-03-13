import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

import {AccordionComponent} from '../shared/components/accordion/accordion';
import {AccordionItem} from '../shared/components/accordion/accordion-item';
import {AccordionItemHead} from '../shared/components/accordion/accordion-item-head';
import {AccordionItemBody} from '../shared/components/accordion/accordion-item-body';

import { User, UserService } from '../shared';

import { Registration } from '../shared/models/registration.model'
import { Subscription } from '../shared/models/subscription.model'
import { SubscriptionType } from '../shared/models/subscription.type.model'
import { ClientCompanyInformation } from '../shared/models/client.company.model'
import { Framework } from '../shared/models/framework.model'
import { Site } from '../shared/models/site.model'
import { Status } from '../shared/models/status.model'
import { IndustryType } from '../shared/models/industry.type.model'
import { CompanyType } from '../shared/models/company.type.model'
import { CompanySize } from '../shared/models/company.size.model'
import { PhysicalAddress, Country, Suburb, City, Province  } from '../shared/models/address.models'
import { YesNoOptions, NumberOptions  } from '../shared/models/options.models'

@Component({
    selector: 'registration-page',
    templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
    currentUser: User;
    subscription: Subscription = new Subscription();
    clientCompanyInformation: ClientCompanyInformation = new ClientCompanyInformation();
    registration: Registration = new Registration();

    errors: Object = {};
    isSubmitting: boolean = false;
    registrationForm: FormGroup;

    private itemsList:Object[] = [
        {
        title: 'Item 1',
        description: 'description 1'
        },
        {
        title: 'Item 2',
        description: 'description 2'
        }
    ]

    private subscriptionTypes: Array<SubscriptionType> = [
        { id: 1, name: '3 Sites for R3000 per month' }
    ];

    private industryTypes: Array<IndustryType> = [
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Finance' },
        { id: 3, name: 'Insurance' },
        { id: 4, name: 'FMCG' },
        { id: 5, name: 'Retail' },
        { id: 6, name: 'Education' },
        { id: 7, name: 'Professional Services' },
        { id: 8, name: 'Public Service' },
        { id: 9, name: 'Legal' },
        { id: 10, name: 'HR. Manufacturing' },
        { id: 11, name: 'Engineering' },
        { id: 12, name: 'Construction' },
        { id: 13, name: 'Marketing' },
        { id: 14, name: 'Transport' }
    ];

    private companySizes: Array<CompanySize> = [
        { id: 1, name: '0-10'},
        { id: 2, name: '10-50'},
        { id: 3, name: '50-200'},
        { id: 4, name: ' 200+ employees'}
    ];

    private countries: Array<Country> = [
        { id: 1, name: 'South Africa'}
    ];

    private provinces: Array<Province> = [
        { id: 1, name: 'Gauteng', country: this.countries[0] },
        { id: 2, name: 'Eastern Cape', country: this.countries[0] },
        { id: 3, name: 'Free State', country: this.countries[0] },
        { id: 4, name: 'KwaZulu-Natal', country: this.countries[0] },
        { id: 5, name: 'Mpumalanga', country: this.countries[0] },
        { id: 6, name: 'Northern Cape', country: this.countries[0] },
        { id: 7, name: 'North West', country: this.countries[0] },
        { id: 8, name: 'Limpopo', country: this.countries[0] },
        { id: 9, name: 'Western Cape', country: this.countries[0] },
    ];

    private cities: Array<City> = [
        { id: 1, name: 'Alberton', provice: this.provinces[0] },
        { id: 2, name: 'Germiston', provice: this.provinces[0] },
        { id: 3, name: 'Benoni', provice: this.provinces[0] },
        { id: 4, name: 'Boksburg', provice: this.provinces[0] },
        { id: 5, name: 'Brakpan', provice: this.provinces[0] },
        { id: 6, name: 'Clayville', provice: this.provinces[0] },
        { id: 7, name: 'Daveyton', provice: this.provinces[0] },
        { id: 8, name: 'Devon', provice: this.provinces[0] },
    ];

    private companyTypes: Array<CompanyType> = [
        {id: 1, name: 'Private'},
        {id: 2, name: 'Public'},
        {id: 3, name: 'NGO'},
        {id: 4, name: 'Parastatel'},
        {id: 5, name: 'Goverment'}
    ];

    private howManyNumbers : Array<NumberOptions> = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 }
    ];

    private siteYesNoDontKnow : Array<YesNoOptions> = [
        { id: 1, name: 'Yes' },
        { id: 2, name: 'No' },
        { id: 3, name: 'I Dont Know' }
    ];

    private siteYesNoOutsourced : Array<YesNoOptions> = [       
        { id: 2, name: 'No' },
        { id: 4, name: 'Yes - In House' },
        { id: 5, name: 'Yes - Outourced' }
    ];

    public setupSubscription() {
        //Need to do this
        //(<any>Object).assign(this.subscription, this.registrationService.getCurrentSubscription());
        (<any>Object).assign(this.subscription, new Subscription())

    }

    constructor(
        private router: Router,
        private userService: UserService,
        private formBuilder: FormBuilder
    ) {

        this.registrationForm = this.formBuilder.group({
            registration: this.registration,

            subscriptionTypes: this.subscriptionTypes,
            subscriptionType: this.subscriptionTypes[0],

            companyName: '',
            industryType: '',
            companySize: '',
            suburb: '',
            country: '',
            province: '',
            city: '',
            email: '',
            firstName: '',
            surname: '',
            contactNumber: '',
            companyType: '',

            locationCount: 0,
            virtualEnviromentCount: 0,
            hasComplianceOfficer: 0,
            hasItDept: 0,
            hasInternationalPres: 0,
            hasLegalDept: 0,
            hasHrDept: 0,
            hasWebsite: 0,
            hasOrganogram: 0,

            hasExistingFramwork: 0,
            requiresCertification: 0,
            hasPoliciesInPlace: 0,
            hasContactListOfAllEmployees: 0,
            hasEmailServer: 0,
            hasActiveDirectory: 0,
            hasAntiVirus: 0,
            hasDataBackup: 0,
            hasCommercialFirewall: 0

        });
    }

    ngOnInit() {
        //this.setupSubscription();

        // this.subscription = {
        //     id: 0,
        //     subscriptionType: this.subscriptionTypes[0]
        // }


        this.clientCompanyInformation = {
            companyName: '',
            companySize: this.companySizes[0],
            companyType: new CompanyType(),
            contactNumber: null,
            email: null,
            firstName: null,
            id: null,
            industryType: this.industryTypes[0],
            physcialAddress: new PhysicalAddress(),
            surname: null
        }

        this.registration = {
            id: null,
            subscription: this.subscription,
            profile: null,
            clientCompanyInformation: this.clientCompanyInformation,
            user: this.currentUser,
            createdBy: this.currentUser,
            dateCreated: null,
            dateUpdated: null,
            framework: new Framework(),
            site: new Site(),
            slug: '',
            status: new Status(),
            updatedBy: this.currentUser
        }

        this.userService.currentUser.subscribe(
            (userData: User) => {
                this.currentUser = userData;
            });       


        //(<any>Object).assign(this.registration, new Subscription())
        //this.registrationForm.patchValue(this.registration)
    }

    submitForm() {
        this.isSubmitting = true;
        this.updateRegistration(this.registrationForm.value);

    }

    updateRegistration(values: Object) {
        (<any>Object).assign(this.subscription, values);
    }
}