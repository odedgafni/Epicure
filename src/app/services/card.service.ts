import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private dishes = [
    {
      id: 1,
      restoName: "Tiger Lilly",
      img: "/assets/signature-dish-pictures/dish-pad-ki-mao/pad-ki-mao.jpg",
      title: "Pad Ki Mao",
      description: "Shrimps, glass Noodles, kemiri nuts, shallots, lemon grass, magic chili",
      icon: "/assets/icons/spicy.svg",
      price: 88
    },
    {
      id: 2,
      restoName: "Kab Kem",
      img: "/assets/signature-dish-pictures/dish-garbanzo/dish-garbanzo.jpg",
      title: "Garbanzo Frito",
      description: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
      price: 98
    },
    {
      id: 3,
      restoName: "Popina",
      img: "/assets/signature-dish-pictures/dish-smoked-pizza/smoked-pizza.jpg",
      title: "Smoked Pizza",
      description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
      icon: "/assets/icons/vegan-big.svg",
      price: 65
    },
    {
      id: 4,
      restoName: "Popina",
      img: "/assets/signature-dish-pictures/dish-smoked-pizza/smoked-pizza.jpg",
      title: "Smoked Pizza",
      description: 'Basil dough, cashew "butter", demi-glace, bison & radish',
      icon: "/assets/icons/vegan-big.svg",
      price: 65
    },
  ];

  private restaurants = [
    {
      id: 1,
      img: "/assets/restaurant-pictures/Claro/claro.jpg",
      title: "Claro",
      description: "Ran Shmueli"
    },
    {
      id: 2,
      img: "/assets/restaurant-pictures/Lumina/lumina.jpg",
      title: "Lumina",
      description: "Meir Adoni"
    },
    {
      id: 3,
      img: "/assets/restaurant-pictures/Tiger-Lilly/tiger.jpg",
      title: "Tiger Lilly",
      description: "Yanir Green"
    },
    {
      id: 4,
      img: "/assets/restaurant-pictures/Messa/messa.jpg",
      title: "Messa",
      description: "Aviv Moshe"
    },
  ];

  getDishes() {
    return of(this.dishes)
  }

  getAllResto() {
    return of(this.restaurants)
  }

  getNewResto() {
    return of(this.restaurants.filter(resto => resto.id > 2));
  }

  getPopularResto() {
    return of(this.restaurants.filter(resto => resto.id < 4));
  }

  getRestoById(id: number) {
    return of(this.restaurants.find(resto => resto.id === id))
  }

  search(value) {
    if (!value.trim()) return of([]);    
    const regex = new RegExp(`^${value.trim()}`, 'gi');
    return of(this.restaurants.filter(x => x.title.match(regex)));
  }

  constructor() { }
}
