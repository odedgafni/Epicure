import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PopularRestaurantsComponent } from './components/popular-restaurants/popular-restaurants.component';
import { SignatureDishComponent } from './components/signature-dish/signature-dish.component';
import { ChefOfTheWeekComponent } from './components/chef-of-the-week/chef-of-the-week.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { IconMapComponent } from './components/icon-map/icon-map.component';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { FooterLinksComponent } from './components/footer-links/footer-links.component';
import { RestaurantPageComponent } from './components/restaurant-page/restaurant-page.component';
import { MobileNavLinksComponent } from './components/mobile-nav-links/mobile-nav-links.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    HomepageComponent,
    PopularRestaurantsComponent,
    SignatureDishComponent,
    ChefOfTheWeekComponent,
    FooterComponent,
    CardComponent,
    IconMapComponent,
    RestaurantsPageComponent,
    FooterLinksComponent,
    RestaurantPageComponent,
    MobileNavLinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
