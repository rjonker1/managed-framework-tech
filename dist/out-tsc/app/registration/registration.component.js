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
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared';
import { Registration } from '../shared/models/registration.model';
import { Subscription } from '../shared/models/subscription.model';
import { ClientCompanyInformation } from '../shared/models/client.company.model';
import { Framework } from '../shared/models/framework.model';
import { Site } from '../shared/models/site.model';
import { Status } from '../shared/models/status.model';
import { CompanyType } from '../shared/models/company.type.model';
import { PhysicalAddress } from '../shared/models/address.models';
export var RegistrationComponent = (function () {
    function RegistrationComponent(router, userService, formBuilder) {
        this.router = router;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.subscription = new Subscription();
        this.clientCompanyInformation = new ClientCompanyInformation();
        this.registration = new Registration();
        this.errors = {};
        this.isSubmitting = false;
        this.itemsList = [
            {
                title: 'Item 1',
                description: 'description 1'
            },
            {
                title: 'Item 2',
                description: 'description 2'
            }
        ];
        this.subscriptionTypes = [
            { id: 1, name: '3 Sites for R3000 per month' }
        ];
        this.industryTypes = [
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
        this.companySizes = [
            { id: 1, name: '0-10' },
            { id: 2, name: '10-50' },
            { id: 3, name: '50-200' },
            { id: 4, name: ' 200+ employees' }
        ];
        this.countries = [
            { id: 1, name: 'South Africa' }
        ];
        this.provinces = [
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
        this.cities = [
            { id: 1, name: 'Alberton', provice: this.provinces[0] },
            { id: 2, name: 'Germiston', provice: this.provinces[0] },
            { id: 3, name: 'Benoni', provice: this.provinces[0] },
            { id: 4, name: 'Boksburg', provice: this.provinces[0] },
            { id: 5, name: 'Brakpan', provice: this.provinces[0] },
            { id: 6, name: 'Clayville', provice: this.provinces[0] },
            { id: 7, name: 'Daveyton', provice: this.provinces[0] },
            { id: 8, name: 'Devon', provice: this.provinces[0] },
        ];
        this.companyTypes = [
            { id: 1, name: 'Private' },
            { id: 2, name: 'Public' },
            { id: 3, name: 'NGO' },
            { id: 4, name: 'Parastatel' },
            { id: 5, name: 'Goverment' }
        ];
        this.howManyNumbers = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 }
        ];
        this.siteYesNoDontKnow = [
            { id: 1, name: 'Yes' },
            { id: 2, name: 'No' },
            { id: 3, name: 'I Dont Know' }
        ];
        this.siteYesNoOutsourced = [
            { id: 2, name: 'No' },
            { id: 4, name: 'Yes - In House' },
            { id: 5, name: 'Yes - Outourced' }
        ];
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
    RegistrationComponent.prototype.setupSubscription = function () {
        //Need to do this
        //(<any>Object).assign(this.subscription, this.registrationService.getCurrentSubscription());
        Object.assign(this.subscription, new Subscription());
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        //this.setupSubscription();
        var _this = this;
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
        };
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
        };
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
        //(<any>Object).assign(this.registration, new Subscription())
        //this.registrationForm.patchValue(this.registration)
    };
    RegistrationComponent.prototype.submitForm = function () {
        this.isSubmitting = true;
        this.updateRegistration(this.registrationForm.value);
    };
    RegistrationComponent.prototype.updateRegistration = function (values) {
        Object.assign(this.subscription, values);
    };
    RegistrationComponent = __decorate([
        Component({
            selector: 'registration-page',
            templateUrl: './registration.component.html'
        }), 
        __metadata('design:paramtypes', [Router, UserService, FormBuilder])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
//# sourceMappingURL=D:/Projects/my/managed-framework-tech/app/registration/registration.component.js.map