import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/items/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public state:any;
  public productForm: FormGroup;
  public submitted: boolean = false;

  constructor(private fromBuilder: FormBuilder, private productSrv:ProductService, private router:Router, private activatedRoutes: ActivatedRoute) {
   
    this.productForm = this.fromBuilder.group({
      id:[''],
      name: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(30)]],
      type: ['',[Validators.required]],
      price: ['',[Validators.required]],
      quantity: ['',[Validators.required]],
      quantityType: ['',[Validators.required]],
      unit: ['1'],
      imageUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.state = this.activatedRoutes.paramMap.pipe(()=> window.history.state);
    console.log(this.state);
    // fill data into form elements
    this.productForm.patchValue(this.state);
  }


  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      this.submitted = true;
      console.log(this.productForm.value);
      //here write logic to create a product
      this.productSrv.updateProduct(this.productForm.value).subscribe(res=>{
        console.log(res);
        console.log("Product is updated successfully");
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

  get name() {
    return this.form['name'];
  }

  get type() {
    return this.form['type'];
  }

  get price() {
    return this.form['price'];
  }

  get quantity() {
    return this.form['quantity'];
  }

  get quantityType() {
    return this.form['quantityType'];
  }

  get unit() {
    return this.form['unit'];
  }

  get imageUrl() {
    return this.form['imageURL'];
  }

  get description() {
    return this.form['description'];
  }

}
