import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/items/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public productForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private productSrv:ProductService, private router:Router) {
   
    this.productForm = this.fromBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      productPrice: ['',[Validators.required]],
      productQuantity: ['1'],
      cookingTime: ['',[Validators.required]],
      imageUrl: ['./assets/images/', [Validators.required]],
      productDescription: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      console.log(this.productForm.value);
      //here write logic to create a product
      this.productSrv.addProduct(this.productForm.value).subscribe(res=>{
        // console.log(res);
        console.log("Product is created successfully");
        this.router.navigateByUrl("/product-management");
      });
    } else {
      console.log("Invalid Form !");
      this.validateForm(loginForm);
    }
  }

  public validateForm(form: any) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else{
        this.validateForm(control)
      }
    })
  }

  hasError(field: any) {
    return (this.productForm.get(field)?.invalid && this.productForm.get(field)?.touched && this.productForm.get(field)?.errors);
  }
  
  get form() {
    return this.productForm.controls;
  }

  get productName() {
    return this.form['productName'];
  }

  get producType() {
    return this.form['productType'];
  }

  get productPrice() {
    return this.form['productPrice'];
  }

  get productQuantity() {
    return this.form['productQuantity'];
  }

  get cookingTime() {
    return this.form['cookingTime'];
  }

  get unit() {
    return this.form['unit'];
  }

  get imageUrl() {
    return this.form['imageURL'];
  }

  get productDescription() {
    return this.form['productDescription'];
  }
}