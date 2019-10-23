import { Routes } from '@angular/router';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { CartService } from './cart.service';
import { Beer } from './beerlist/beer';
import { BeercartComponent } from './beercart/beercart.component';

export const appRoutes: Routes = [
  { path: '', component: BeerlistComponent },
  { path: 'beers', component: BeerlistComponent },
  { path: 'about', component: BreweryAboutComponent },
  { path: 'cart', component: BeercartComponent },
];
