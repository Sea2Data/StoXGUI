import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getstations(): Observable<string> {
    // return this.httpClient.get("http://localhost:8080/geojson", {responseType: 'json'});
    return this.httpClient.get("http://localhost:8080/geojson", { responseType: 'text' });
  }

}
