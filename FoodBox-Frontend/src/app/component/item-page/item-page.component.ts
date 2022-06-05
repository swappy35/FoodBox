import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/items/product.service';
import { ActivatedRoute,ParamMap} from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})
export class ItemPageComponent implements OnInit {

  public products:any;
  public itemType:any;
  public searchItem : any = '';

  constructor(private productSrv : ProductService, private route : ActivatedRoute, private cartSrv : CartService) { }

  ngOnInit(): void {

    // public getProducts(){
      this.productSrv.getProducts().subscribe(data => {
        // console.log("1");
        console.log(data);
        this.products = data;
      });


    // this.route.paramMap.subscribe((params:ParamMap)=>{
    //   this.products = params.get('type');
    //   console.log(params);
      
    // });
  }
  addToCart(product : any){
    this.cartSrv.addToCart(product);
  }

  // public getProducts(){
  //   this.productSrv.getProducts().subscribe(data => {
  //     console.log(data);
  //     this.products = data;
  //   });
  // }

  // public getProductByType(type:string){
  //   this.productSrv.getProductByType(type).subscribe(data =>{
  //     console.log("2");
  //     console.log(data);
  //     this.products = data;
  //     this.router.navigateByUrl(`/item-page`);
  //     this.routerLink="/item-page/{{food.type}}";
  //   });
  // }
}
