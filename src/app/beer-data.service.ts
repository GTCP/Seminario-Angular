import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from './beerlist/beer';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }


  getBeers() {
    return this.http.get('https://brewery-angular.firebaseio.com/beers.json');
}
}
