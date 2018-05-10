import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  people: any;

  constructor(private http: Http) { }

  findAstronauts() {
    this.http.get('http://api.open-notify.org/astros.json')
      .toPromise()
      .then(response => this.people = response.json().people);
  }
  ngOnInit() {
  }

}
