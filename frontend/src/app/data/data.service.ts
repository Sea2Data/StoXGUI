import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  stations : any;

  constructor(private httpClient: HttpClient) { }

  getstations() {
    // return this.httpClient.get("http://localhost:8080/geojson", {responseType: 'json'});
    this.httpClient.get("http://localhost:8080/geojson", {responseType: 'text'}).subscribe(response => {this.stations = response.toString});
  }

  getsts() : string {
    console.log("her");
    this.getstations();
    console.log(this.stations);
    return this.stations;
  }

}
