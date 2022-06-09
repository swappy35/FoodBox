import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // private url: string = "http://localhost:3000/users";
  private url: string = "http://localhost:8082/foodbox/users";

  //get all users
  public getUsers() {
    return this.httpClient.get(this.url);
  }

  //get one user
  public getUser(id: string) {
    return this.httpClient.get(`${this.url}/${id}`);
  }

  //get one user by email id
  public getUserByEmail(email: string) {
    return this.httpClient.get(this.url + '/user/role/' + `${email}`);
    // return this.httpClient.get(`${this.url}?email=${email}`);
  }
  // Get admin User by email
  // public getadminByEmail(email: string) {
  //   console.log(email); 
  //   console.log((this.url + '/getadminByEmail/' + `${email}`)); 
  //   return this.httpClient.get(this.url + '/getadminByEmail/' + `${email}`);
  // }

  //get one user by role
  public getUserByRole(userRole: string) {
    // return this.httpClient.get(`${this.url}?role=${role}`);
    // console.log(userRole); 
    // console.log((this.url + '/user/role/' + `${userRole}`)); 
    return this.httpClient.get(this.url + '/role/' + `${userRole}`);
  }

  //add user
  public addUser(user: any) {
    //  return this.httpClient.post(this.url,user);
    // console.log(this.httpClient.post(this.url + '/user/add/', user));
    return this.httpClient.post(this.url + '/user/add/', user);
  }

  //update user
  // public updateUser(user:any){
  //   return this.httpClient.put(`${this.url}/${user.id}`,user);

  // }

  //delete user
  // public deleteUser(id:string){
  //   return this.httpClient.delete(`${this.url}/${id}`);
  // }
}

