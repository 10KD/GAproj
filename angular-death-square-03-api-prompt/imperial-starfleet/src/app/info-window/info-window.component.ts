import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {
  
  dataBanks: any;
  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) { }
  
  findTurret(turretNumber) {
    
    this.http.get('http://localhost:3000/api/turret/' + turretNumber)
    .toPromise()
    .then(response => {
        console.log(response.json());
        this.dataBanks = response.json();
      });
  }

  ngOnInit() {
    this.route.params.forEach(param => this.findTurret(param.id));
  }

}
