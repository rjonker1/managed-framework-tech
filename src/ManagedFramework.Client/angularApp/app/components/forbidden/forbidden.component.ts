import { Component, OnInit } from '@angular/core'

@Component({
    moduleId: module.id.toString(),
    selector: 'forbidden',
    templateUrl: 'forbidden.component.html'
})
export class ForbiddenComponent implements OnInit {

    message: string;
    values: any[];

ngOnInit() { }

    constructor() {
        this.message = '';
    }
}