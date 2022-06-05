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
        name : 'Daily Essentials',
        type : 'daily-essentials',
        imageUrl:'assets/images/Home/daily-essentials.jpg',

      },
      {
        id : 2,
        name : 'Fruits & Vegetables',
        type : 'fruits-vegeatbles',
        imageUrl:'assets/images/Home/fruits-vegetables.jpg',

      },
      {
        id : 3,
        name : 'Groceries',
        type : 'groceries',
        imageUrl:'assets/images/Home/groceries.jpg',

      },
      {
        id : 4,
        name : 'Kitchen Appliances',
        type : 'appliances',
        imageUrl:'assets/images/Home/appliances.jpg',

      },
      {
        id : 5,
        name : 'Utensils',
        type : 'utensils',
        imageUrl:'assets/images/Home/utensils.jpeg',

      },
    ]
  }
}
