import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CardService } from '../../services/card.service'

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {

  private id: number;
  public restaurant;
  public dishes;

  constructor(private route: ActivatedRoute, private cardService: CardService) {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.cardService.getRestoById(this.id).subscribe(resto =>
      this.restaurant = resto
    );
    this.cardService.getDishes().subscribe(dishes => this.dishes = dishes)
  }

}
