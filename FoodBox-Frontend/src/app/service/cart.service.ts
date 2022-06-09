import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem : any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    console.log(this.cartItem);
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItem.push(...product);
    this.productList.next(product);
  }

  addToCart(product : any){
    const cartObj = this.cartItem.find((element : any) => element.productId === product.productId);

    console.log(product.productId);
    console.log(cartObj);

    if(cartObj){
      console.log("Available "+cartObj.productId);
      let storeIndex = this.cartItem.findIndex((e:any) => e.productId == product.productId);
      console.log(storeIndex);
      this.cartItem[storeIndex].quantity = +this.cartItem[storeIndex].quantity + +1;
      this.cartItem[storeIndex].total = this.cartItem[storeIndex].quantity * cartObj.productPrice;
    }
    else{
      console.log("Not Available");
      this.cartItem.push(product);
    }
    this.productList.next(this.cartItem);
    this.getTotalPrice();
    console.log(this.cartItem);
  }

  getTotalPrice() : number{
    let Total = 0;
    this.cartItem.map((a : any) => {
      Total = +Total + +a.total;
    })
    return Total;
  }

  removeCartItem(product : any){
    this.cartItem.map((a :any, index :any) =>{
      if(product.productId === a.productId){
        this.cartItem.splice(index, 1);
      }
    })
  }

  removeAllItems(){
    this.cartItem = [];
    this.productList.next(this.cartItem);
  }
}
