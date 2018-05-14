import { Component } from '@angular/core';
import { PROFILES } from './profiles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Site';
  profiles = PROFILES;
}
