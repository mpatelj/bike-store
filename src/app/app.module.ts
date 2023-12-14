import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeListComponent } from './component/bike-list/bike-list.component';
import { AddBikeComponent } from './component/add-bike/add-bike.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateBikeComponent } from './component/update-bike/update-bike.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    AddBikeComponent,
    UpdateBikeComponent,
    LandingPageComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
