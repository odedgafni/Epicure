import { Injectable } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  config: SwiperConfigInterface;

  constructor() { 
    this.config = {
      direction: 'horizontal',
      width: 1140,
      slidesPerView: 3,
      simulateTouch: true,
      centeredSlidesBounds: true,
      centeredSlides: true,
      centerInsufficientSlides: true,
      resizeObserver: true,
      // navigation: true,
      // pagination: true,
      keyboard: false
    }
  }
}
