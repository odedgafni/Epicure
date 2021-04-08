import { Component, OnInit } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { CardService } from 'src/app/services/card.service';
import { ScreenWatcherService } from 'src/app/services/screen-watcher.service';

@Component({
  selector: 'app-popular-restaurants',
  templateUrl: './popular-restaurants.component.html',
  styleUrls: ['./popular-restaurants.component.scss']
})

export class PopularRestaurantsComponent implements OnInit {

  swiperConfig: SwiperConfigInterface;

  restaurants = [];

  constructor(
    private screenWatcherService: ScreenWatcherService,
    private cardService: CardService) {
      this.swiperConfig = {
      direction: 'horizontal',
      slidesPerView: 1,
      simulateTouch: true,
      centeredSlidesBounds: true,
      centeredSlides: true,
      centerInsufficientSlides: true,
    }
  }

  ngOnInit(): void {
    this.adjustSwiperWidth()
    this.getRestaurants()
  }

  getRestaurants() {
    this.cardService.getAllResto().subscribe(data => this.restaurants = data);
  }

  adjustSwiperWidth() {
    this.screenWatcherService.screenWidth$.subscribe(screenWidth => {
      if (screenWidth < 600) {
        this.swiperConfig.width = 200;
      } else {
        this.swiperConfig.width = 370;
      }
    })
  }

}
