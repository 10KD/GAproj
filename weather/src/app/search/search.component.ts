import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'
import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  weather: any;
  searchSubject = new Subject();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(zip1 =>
        this.searchService.createAPI(zip1)
          .subscribe(response => this.weather = response.json())
      )

  }

  findWeather(zip) {
    this.searchSubject.next(zip);
  }

}