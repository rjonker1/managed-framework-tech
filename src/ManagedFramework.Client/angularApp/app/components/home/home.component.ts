import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    message: string;
    values: any[];

    constructor() {
        this.message = 'Managed Framework';
    }

    ngOnInit() {
        
    }
}