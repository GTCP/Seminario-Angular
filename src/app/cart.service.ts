import { Injectable } from '@angular/core';
import { Beer } from './beerlist/beer';
import { BeerDataService } from './beer-data.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  protected items: Beer[] = [];
  protected itemsSubject: BehaviorSubject<Beer[]> = new BehaviorSubject(this.items);
  public itemsObs: Observable<Beer[]> = this.itemsSubject.asObservable();
  constructor() { }

  addToCart(beer: Beer) {
    let newBeer = Object.assign({}, beer);
    let alreadyInCart = false;
    this.items.forEach( (b: Beer) => {
      if (b.name === newBeer.name) {
        alreadyInCart = true;
        b.quantity ++;
      }
    });
    if (!alreadyInCart) {
      newBeer.quantity ++;
      this.items.push(newBeer);
      this.itemsSubject.next(this.items);
    }
  }
  getItems() {
    return this.items;
  }
}
