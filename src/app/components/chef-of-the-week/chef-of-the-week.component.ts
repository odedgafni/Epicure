import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
