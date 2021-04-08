import { Component, OnInit } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { CardService } from 'src/app/services/card.service'
import { ScreenWatcherService } from 'src/app/services/screen-watcher.service';

@Component({
  selector: 'app-signature-dish',
  templateUrl: './signature-dish.component.html',
  styleUrls: ['./signature-dish.component.scss']
})
export class SignatureDishComponent implements OnInit {

  swiperConfig: SwiperConfigInterface;

  dishes = [];

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
    this.getDishes()
  }

  getDishes() {
    this.cardService.getDishes().subscribe(data => this.dishes = data);
  }

  adjustSwiperWidth() {
    this.screenWatcherService.screenWidth$.subscribe(screenWidth => {
      if (screenWidth < 600) {
        this.swiperConfig.width = 260;
      } else {
        this.swiperConfig.width = 360;
      }
    })
  }
}
