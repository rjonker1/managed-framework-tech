import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TagsService, UserService } from '../shared';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private tagsService: TagsService,
    private userService: UserService
  ) {}

  isAuthenticated: boolean;
  tags: Array<string> = [];
  tagsLoaded: boolean = false;

  ngOnInit() {
    // this.userService.isAuthenticated.subscribe(
    //   (authenticated) => {
    //     this.isAuthenticated = authenticated;

    //     // // set the article list accordingly
    //     // if (authenticated) {
    //     //   this.setListTo('feed');
    //     // } else {
    //     //   this.setListTo('all');
    //     // }
    //   }
    // );

    // this.tagsService.getAll()
    // .subscribe(tags => {
    //   this.tags = tags;
    //   this.tagsLoaded = true;
    // });
  }

  setListTo(type: string = '', filters: Object = {}) {
    // // If feed is requested but user is not authenticated, redirect to login
    // if (type === 'feed' && !this.isAuthenticated) {
    //   this.router.navigateByUrl('/login');
    //   return;
    }

    // Otherwise, set the list object
   // this.listConfig = {type:type, filters:filters};
  }
//}


//********/




// import {
//   Component,
//   OnInit
// } from '@angular/core';

// import { AppState } from '../app.service';
// import { Title } from './title';
// import { XLargeDirective } from './x-large';

// @Component({
//   // The selector is what angular internally uses
//   // for `document.querySelectorAll(selector)` in our index.html
//   // where, in this case, selector is the string 'home'
//   selector: 'home',  // <home></home>
//   // We need to tell Angular's Dependency Injection which providers are in our app.
//   providers: [
//     Title
//   ],
//   // Our list of styles in our component. We may add more to compose many styles together
//   styleUrls: [ './home.component.css' ],
//   // Every Angular template is first compiled by the browser before Angular runs it's compiler
//   templateUrl: './home.component.html'
// })
// export class HomeComponent implements OnInit {
//   // Set our default values
//   public localState = { value: '' };
//   // TypeScript public modifiers
//   constructor(
//     public appState: AppState,
//     public title: Title
//   ) {}

//   public ngOnInit() {
//     console.log('hello `Home` component');
//     // this.title.getData().subscribe(data => this.data = data);
//   }

//   public submitState(value: string) {
//     console.log('submitState', value);
//     this.appState.set('value', value);
//     this.localState.value = '';
//   }
// }
