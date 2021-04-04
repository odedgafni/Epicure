import { Component, OnInit } from '@angular/core';

import { CardService } from '../../services/card.service'

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.scss']
})
export class RestaurantsPageComponent implements OnInit {

  restaurants = [];

  getRestaurants() {
    return this.cardService.getAllResto().subscribe(data => {
      this.restaurants = data;
    });
  }
  getAllResto() {
    this.cardService.getAllResto().subscribe(data => {
      this.restaurants = data;
    });
  }
  getNewResto() {
    this.cardService.getNewResto().subscribe(data => {
      this.restaurants = data;
    });
  }
  getPopularResto() {
    this.cardService.getPopularResto().subscribe(data => {
      this.restaurants = data;
    });
  }

  constructor( private cardService: CardService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

}
