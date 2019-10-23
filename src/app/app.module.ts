import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { BeercartComponent } from './beercart/beercart.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { RouterModule } from '@angular/router';
import { BeerDataService} from './beer-data.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BeerlistComponent,
    BeercartComponent,
    BreweryAboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule
  ],
  providers: [BeerDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
