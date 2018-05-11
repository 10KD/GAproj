import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class SearchService{

    constructor(private http: Http){}

    createAPI(zip1){
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip1 + ',us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial')
    }

}