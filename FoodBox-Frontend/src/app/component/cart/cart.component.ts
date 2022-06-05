import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
// import { Product } from 'src/app/model/product.model';
// import { ProductService } from 'src/app/service/items/product.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService, private router: Router) { 
    console.log(cartService); 
  }

  ngOnInit() {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();

    })
    console.log(this.products);
  }

  removeItem(item: any) {
    console.log(item.total);
    this.cartService.removeCartItem(item);
    this.grandTotal = this.grandTotal - item.total;
  }


  emptycart() {
    this.cartService.removeAllItems();

  }
  checkoutcart() {
    this.router.navigateByUrl("/checkout");
  }
}