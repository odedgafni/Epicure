import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'restaurants', component: RestaurantsPageComponent},
  {path: 'restaurant/:id', component: RestaurantPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
