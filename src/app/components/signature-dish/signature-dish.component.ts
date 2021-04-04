import { Component, OnInit } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { SwiperService } from '../../services/swiper.service';
import { CardService } from '../../services/card.service'

@Component({
  selector: 'app-signature-dish',
  templateUrl: './signature-dish.component.html',
  styleUrls: ['./signature-dish.component.scss']
})
export class SignatureDishComponent implements OnInit {

  swiperConfig: SwiperConfigInterface;
  
  dishes = [];

  getDishes() {
    this.cardService.getDishes().subscribe(data => this.dishes = data);
  }

  constructor(
    private swiperService: SwiperService,
    private cardService: CardService ) {
    this.swiperConfig = this.swiperService.config
    
  }

  ngOnInit(): void {
    this.getDishes()
  }
}
