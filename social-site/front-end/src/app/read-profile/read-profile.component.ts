import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROFILES } from '../profiles';
import { Http } from '@angular/http';


@Component({
  selector: 'app-read-profile',
  templateUrl: './read-profile.component.html',
  styleUrls: ['./read-profile.component.css']
})
export class ReadProfileComponent implements OnInit {
  id: Number;
  profile: any;
  constructor(private route: ActivatedRoute, private http: Http) { }

  editProfile(){
    console.log("edit profile");
    // this.http.patch()
  }

  deleteProfile(){
    console.log("delete profile");
  }

  // ngOnInit() {
  //   this.route.params.forEach(param => {
  //     this.profile = PROFILES.find(profile => {
  //       return profile.id === parseInt(param.id)
  //     });   
  //   });
  // }
  paramid: Number;
  ngOnInit() {
    
    this.route.params.forEach(param => {
      if (param.id) {
        this.paramid = param.id;
      }
    });
    console.log(this.paramid);
    
    this.http.get('/api/profiles/' + this.paramid)
      .toPromise()
      .then(response => {

        this.profile = response.json();
        console.log(this.profile);
      }
      ); 
      
    
  }

}
