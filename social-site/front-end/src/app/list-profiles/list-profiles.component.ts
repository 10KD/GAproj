import { Component, OnInit } from '@angular/core';
import { PROFILES } from '../profiles';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {
  profiles = PROFILES;
  constructor() { }

  ngOnInit() {
  }

}
