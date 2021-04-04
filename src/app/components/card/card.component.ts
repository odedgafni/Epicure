import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { Card } from '../../models/Card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData: Card;
  @Input() cardClass: string;

  redirect() {
    if (!this.cardData.price) {
      this.router.navigate([`./restaurant/${this.cardData.id}`])
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
