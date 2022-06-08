import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User = {
    Id:0,
    firstName:'',
    lastName:'',
    userEmail:'',
    userPassword:'',
    userRole:''
  }
  public submitted:boolean = false;
  constructor(private userSrv:UserService, private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(form:any) {
    console.log(form);
    if(form.valid){
      this.submitted = true;
      console.log(this.user);
      this.user.userRole = "customer";
      this.userSrv.addUser(this.user).subscribe(res=>{
        console.log(res);
        this.router.navigateByUrl('login');
        console.log("User has registered suuccessfully");
      });
    } else{
      this.validate(form);
      console.log("The form cannot be submited");
    }    
  }

  hasError(field:any) {
    return (field.invalid && field.touched && field.errors);
  }

  validate(form:any){
    console.log(form);
    console.log(form.controls);
     Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true});
      });
  }
  
}

interface User {
  Id:number;
  firstName:string;
  lastName:string;
  userEmail:string;
  userPassword:string;
  userRole:any;
}
