import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { AuthserviceService } from 'src/app/service/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public role : any;
  public loginForm: FormGroup;
  public message: string = "";
  private formSubmit: boolean | undefined;

  constructor(private formBuilder: FormBuilder, private userSrv: UserService, private router: Router, private authService: AuthserviceService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      role: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  public onSubmit(loginForm: any) {
    if (loginForm.valid) {
      // console.log(this.loginForm.value);
      this.userSrv.getUserByRole(this.role.value).subscribe((res: any) => {
        // console.log(res);
        for (let r of res) {
          // console.log(r);
          if (r.email === this.email.value) {
            if (r.password === this.password.value) {
              if (this.role.value === "customer") {
                console.log("Customer logged in");
                sessionStorage.setItem("userRole", (res[0].role));
                this.authService.custLogin(this.loginForm.value);
                this.formSubmit = true;
                // sessionStorage.setItem("user",JSON.stringify(res[0]));
                this.router.navigateByUrl("/home");
              }
              // else {
              //   this.message = "User is not a Customer";
              // }
            }
          }
          // for admin login verification
          if (r.email === this.email.value) {
            if (r.password === this.password.value) {
              if (this.role.value === "admin") {
                console.log("Admin logged in");
                sessionStorage.setItem("userRole", (res[0].role));
                this.authService.admLogin(this.loginForm.value);
                this.formSubmit = true;
                // sessionStorage.setItem("user",JSON.stringify(res[0]));
                this.router.navigateByUrl("/home");
              }
            }
            // else {
            //   this.message = "User is not an Admin";
            // }
          }
          // if(res != null && res != undefined && res.length != 0){
          //   // for customer login verification
          //   if(res[0].password === this.password.value) {
          //     if(this.role.value === "customer"){
          //       console.log("Customer logged in");
          //       sessionStorage.setItem("userRole",(res[0].role));
          //       this.authService.custLogin(this.loginForm.value);
          //       this.formSubmit = true;
          //       // sessionStorage.setItem("user",JSON.stringify(res[0]));
          //       this.router.navigateByUrl("/home");
          //     }
          //     else{
          //       this.message = "User is not a Customer";
          //     }
          //   }
          //   // for admin login verification
          //   if(res[0].password === this.password.value) {
          //     if(this.role.value === "admin"){
          //       console.log("Admin logged in");
          //       sessionStorage.setItem("userRole",(res[0].role));
          //       this.authService.admLogin(this.loginForm.value);
          //       this.formSubmit = true;
          //       // sessionStorage.setItem("user",JSON.stringify(res[0]));
          //       this.router.navigateByUrl("/home");
          //     }
          //     else{
          //       this.message = "User is not an Admin";
          //     }
          //   }
          else {
            this.message = "User Password does not match";
          }
        }
        // else {
        //   this.message = "User does not exist, please Register!";
        // }
      });
    }
    else {
      this.validate(loginForm);
    }
  }

  public validate(form: any) {
    Object.keys(form.controls).forEach(field => {
      const control = form.controls[field];
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      }
      else {
        this.validate(control);
      }
    })
  }

  hasError(fieldName: string) {
    let field = this.loginForm.get(fieldName);
    return (field?.invalid && field.touched && field.errors);
  }

  get form() {
    return this.loginForm.controls;
  }
  get email() {
    return this.form['email'];
  }
  get password() {
    return this.form['password'];
  }
  get role() {
    return this.form['role'];
  }
}