import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  
  profileName: String;
  bio: String;

  constructor() { }

  createProfile(profileName, bio) {
    console.log(profileName);
    console.log(bio);
  }

  ngOnInit() {
  }

}
