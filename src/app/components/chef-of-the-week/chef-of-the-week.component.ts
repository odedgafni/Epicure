import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { ScreenWatcherService } from 'src/app/services/screen-watcher.service';


@Component({
  selector: 'app-chef-of-the-week',
  templateUrl: './chef-of-the-week.component.html',
  styleUrls: ['./chef-of-the-week.component.scss']
})
export class ChefOfTheWeekComponent implements OnInit {

  chefsRestaurants = [
    {
      id: 1,
      img: "/assets/chef-of-the-week/onza.jpg",
      title: "Onza"
    },
    {
      id: 2,
      img: "/assets/chef-of-the-week/kitchen-market.jpg",
      title: "Kitchen Market"
    },
    {
      id: 3,
      img: "/assets/chef-of-the-week/mashya.jpg",
      title: "Mashya"
    }
  ]

  swiperConfig: SwiperConfigInterface;

  constructor(private screenWatcherService: ScreenWatcherService,) {
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
  }

  adjustSwiperWidth() {
    this.screenWatcherService.screenWidth$.subscribe(screenWidth => {
      if (screenWidth < 600) {
        this.swiperConfig.width = 160;
      } else {
        this.swiperConfig.width = 240;
      }
    })
  }
}
