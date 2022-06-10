import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  public getAll():Food[]{
    return[
      {
        id : 1,
        name : 'Burger',
        type : 'burger',
        imageUrl:'assets/images/Home/burger.jpg',

      },
      {
        id : 2,
        name : 'Pizza',
        type : 'pizza',
        imageUrl:'assets/images/Home/pizza.jpg',

      },
      {
        id : 3,
        name : 'Pasta',
        type : 'pasta',
        imageUrl:'assets/images/Home/pasta.jpeg',

      },
      {
        id : 4,
        name : 'Sandwich',
        type : 'sandwich',
        imageUrl:'assets/images/Home/sandwich.jpg',

      },
      {
        id : 5,
        name : 'Beverages',
        type : 'beverages',
        imageUrl:'assets/images/Home/beverage.jpg',

      },
    ]
  }
}
