import { Component, OnInit } from '@angular/core';
import { Beer } from './beer';
import { BeerDataService} from '../beer-data.service';
import { AppModule } from '../app.module';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.scss']
})
export class BeerlistComponent implements OnInit {
  beers: Beer[];
  
constructor(private beerDataService: BeerDataService, private cartService: CartService) { }

ngOnInit() {
  this.beerDataService.getBeers().subscribe( response => {
      this.beers = [];
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          const element = response [key];
          this.beers.push(element);
        }}}
        );
      }

agregarEnStock(beer) {
  beer.stock ++;
}

agregarAlCarrito(beer) {
  this.cartService.addToCart(beer);
  beer.stock --;
}

sacarEnStock(beer) {
  beer.stock --;
 }
}
