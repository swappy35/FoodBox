import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/items/product.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;
  public itemType: any;
  public searchItem : any = '';

  constructor(private productSrv: ProductService, private route: ActivatedRoute, private cartSrv: CartService) { }

  ngOnInit(): void {

    this.getProducts();

    // this.route.params.subscribe(params => {
    //   if (params['searchItem'])
    //     this.products = this.productSrv.getProducts().filter((product: { name: string; }) =>
    //       product.name.toLowerCase().includes(params['searchItem'].toLowercase()));

    // })
  }

  public getProducts(){
    this.productSrv.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
      this.products.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.productPrice });
      });
    });
  }

  addToCart(product: any) {
    this.cartSrv.addToCart(product);
  }

}

