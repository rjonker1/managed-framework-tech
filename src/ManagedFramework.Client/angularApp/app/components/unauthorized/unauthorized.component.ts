import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'unauthorized',
    templateUrl: 'unauthorized.component.html'
})

export class UnauthorizedComponent implements OnInit {

    message: string;
    values: any[];

    constructor() {
        this.message = 'UnauthorizedComponent constructor';
    }

    ngOnInit() {
    }
}