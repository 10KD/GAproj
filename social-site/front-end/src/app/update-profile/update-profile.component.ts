import { Component, OnInit } from '@angular/core';
import { PROFILES } from '../profiles';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  
  profile: any;
  profileName: String;
  bio: String;
  constructor(private route: ActivatedRoute) { }

  updateProfile(profileName, bio) {
    console.log(profileName);
    console.log(bio);
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.profile = PROFILES.find(profile => {
        return profile.id === parseInt(param.id)
      });
    });
  }

}


