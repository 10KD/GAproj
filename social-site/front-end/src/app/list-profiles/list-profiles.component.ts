import { Component, OnInit } from '@angular/core';
import { PROFILES } from '../profiles';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {
  profiles: any;
  // profiles = PROFILES;

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/profiles')
      .toPromise()
      .then(response => this.profiles = response.json());
    console.log(this.profiles);
    
  }

  // ngOnInit() {

  // }

}
