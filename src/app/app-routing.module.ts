import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeListComponent } from './component/bike-list/bike-list.component';
import { AddBikeComponent } from './component/add-bike/add-bike.component';
import { UpdateBikeComponent } from './component/update-bike/update-bike.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'bikelist',
    component: BikeListComponent
  },
  {
    path: 'landingpage',
    component: LandingPageComponent
  },
  {
    path: 'addbike',
    component: AddBikeComponent
  },
  {
    path: 'updatebike/:id',
    component: UpdateBikeComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
