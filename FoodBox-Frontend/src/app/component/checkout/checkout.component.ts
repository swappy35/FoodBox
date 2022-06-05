import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//import { Product } from '../model/Product';
//import { CartserviceService } from '../service/cartservice.service';
//import { ReportService } from '../service/report.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  public grandTotal !: number ;
  checkoutForm = this.formbuilder.group({
    firstname: '',
    lastname: '',
    username:'',
    email:'',
    address:'',
    address2:'',
    country:'',
    state:'',
    zipcode:'',
    checkbox1:'',
    checkbox2:'',
    checkbox3:'',
    paymentmethod1:'',
    paymentmethod2:'',
    paymentmethod3:'',
    cardname:'',
    cardNumber:'',
    cconcard:'',
    cvv:'',
  });
  constructor(
  private formbuilder:FormBuilder,
  private router:Router,	private cartService: CartService,
  ) { }
  //cartitems:Array<Product>=[];
  ngOnInit(): void {
    this.grandTotal = this.cartService.getTotalPrice();
    console.log(this.grandTotal);
  }
  onSubmit(): void {
    // Process checkout data here
  //  this.report.setData(this.checkoutForm.value)
   // this.router.navigate(['/purchase-report'])
  }
  
  checkoutcomplete(){

    this.router.navigateByUrl("/order");
    
  }

}