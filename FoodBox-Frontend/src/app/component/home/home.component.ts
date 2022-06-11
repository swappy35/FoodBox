import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Observable } from 'rxjs';
import { AuthserviceService } from 'src/app/service/authservice.service';
import { FoodService } from 'src/app/service/items/food.service';
import { ProductService } from 'src/app/service/items/product.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAdmLoggedIn : Observable<boolean> | undefined;
  isCustLoggedIn : Observable<boolean> | undefined;
  foods:Food[]=[];
  public products:any;
  
  constructor(private foodService:FoodService, private productSrv:ProductService, private router:Router, private authService : AuthserviceService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
    this.isAdmLoggedIn = this.authService.isAdmLoggedIn;
    
    this.isCustLoggedIn = this.authService.isCustLoggedIn;
  }

  getProductForCust(){
    this.router.navigate(['/products']); 
  }

  getProductForAdm(){
    this.router.navigate(['/product-management']); 
  }

}
