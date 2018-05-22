import { Component } from '@angular/core';
import { PROFILES } from './profiles';
import { USERS } from './users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NYC Records API';
  profiles = PROFILES;
  users = USERS;
}
