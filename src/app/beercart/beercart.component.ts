import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Beer } from '../beerlist/beer';

@Component({
  selector: 'app-beercart',
  templateUrl: './beercart.component.html',
  styleUrls: ['./beercart.component.scss']
})
export class BeercartComponent implements OnInit {

  protected beers: Beer[] = [];

  constructor( private cartService: CartService) { }

  ngOnInit() {
    this.cartService.itemsObs.subscribe(data => {
      this.beers = data;
    });

  }

}
