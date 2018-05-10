import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  weather: any;

  constructor(private http: Http) { }

  findWeather(zip){
    this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
    .toPromise()
    .then(response => this.weather = response.json());
  }

  ngOnInit() {
  }

}
