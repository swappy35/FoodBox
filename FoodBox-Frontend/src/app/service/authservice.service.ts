import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private custLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private admLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private allowed : any;

  get isCustLoggedIn() {
    const custLogin = sessionStorage.getItem('CustLogin');
    console.log("Authorisation");
    console.log("Customer "+custLogin);
    if(custLogin == 'true'){
      this.custLoggedIn.next(true);
      console.log(this.custLoggedIn.asObservable());
    }
    console.log(this.custLoggedIn.asObservable());
    return this.custLoggedIn.asObservable();
  }

  get isAdmLoggedIn() {
    const admLogin = sessionStorage.getItem('AdmLogin');
    console.log("Authorisation");
    console.log("Admin "+admLogin);
    if(admLogin == 'true'){
      this.admLoggedIn.next(true);
      console.log(this.admLoggedIn.asObservable());
    }
    console.log(this.admLoggedIn.asObservable());
    return this.admLoggedIn.asObservable();
  }

  constructor(private router:Router) { }

  custLogin(user:User){
    const userGetRole = sessionStorage.getItem('userRole');
    console.log("Get role "+userGetRole);
    if(userGetRole === 'customer'){
      this.allowed = 'true';
    }

    if(user.userName !== '' && user.password !== '' && this.allowed === 'true'){
      this.custLoggedIn.next(true);
      sessionStorage.setItem("CustLogin", 'true');
      this.router.navigate(['/home']);
    }
  }

  admLogin(user:User){
    const userGetRole = sessionStorage.getItem('userRole');
    console.log("Get role "+userGetRole);
    if(userGetRole === 'admin'){
      this.allowed = 'true';
    }

    if(user.userName !== '' && user.password !== '' && this.allowed === 'true'){
      this.custLoggedIn.next(true);
      sessionStorage.setItem("AdmLogin", 'true');
      this.router.navigate(['/home']);
    }
  }
  
  logout(){
    this.custLoggedIn.next(false);
    sessionStorage.setItem("CustLogin", 'false');
    sessionStorage.setItem("AdmLogin", 'false');
    this.router.navigate(['/home']);
  }

}
interface User{
  userName:string;
  password:string;
  role:string;
}
