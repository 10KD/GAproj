import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROFILES } from '../profiles';


@Component({
  selector: 'app-read-profile',
  templateUrl: './read-profile.component.html',
  styleUrls: ['./read-profile.component.css']
})
export class ReadProfileComponent implements OnInit {
  
  profile: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(param => {
      this.profile = PROFILES.find(profile => {
        return profile.id === parseInt(param.id)
      });
     
      
    });

    console.log("hello");
    
  }
}
