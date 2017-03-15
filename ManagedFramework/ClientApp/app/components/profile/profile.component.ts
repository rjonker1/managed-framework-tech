import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, UserService, Profile } from '../../shared';

@Component({
    selector: 'profile-page',
    template: require('./profile.component.html')
})
export class ProfileComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private userService: UserService
    ) { }

    profile: { username: 'Rudi', bio: '', image: '', following: false };//Profile;
    currentUser: { email: '', username: 'Rudi' } //User;
    isUser: boolean;

    ngOnInit() {
        
        this.route.data.subscribe(
            (data: { profile: Profile }) => {
                //this.profile = data.profile; //TODO; READD
            }
        );

        // Load the current user's data
        this.userService.currentUser.subscribe(
            (userData: User) => {
                //this.currentUser = userData;
                this.isUser = (this.currentUser.username === this.profile.username);
            }
        );
    }

    onToggleFollowing(following: boolean) {
        //this.profile.following = following;
    }
}