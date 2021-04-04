import { Component, OnInit } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { SwiperService } from '../../services/swiper.service';

import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-popular-restaurants',
  templateUrl: './popular-restaurants.component.html',
  styleUrls: ['./popular-restaurants.component.scss']
})

export class PopularRestaurantsComponent implements OnInit {

  swiperConfig: SwiperConfigInterface;

  restaurants = [];

  getRestaurants() {
    this.cardService.getPopularResto().subscribe(data => this.restaurants = data);
  }

  constructor(
    private swiperService: SwiperService,
    private cardService: CardService) {
    this.swiperConfig = this.swiperService.config;
  }

  ngOnInit(): void {
    this.getRestaurants()
  }

}
