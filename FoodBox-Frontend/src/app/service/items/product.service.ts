import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProdId: any;

  constructor(private httpClient: HttpClient) { }

  private url: string = 'http://localhost:8082/foodbox/products';

  public getProducts() {
    return this.httpClient.get(this.url + `/display/all`);
  }

  public getProductByType(type: string) {
    return this.httpClient.get(`${this.url}?type=${type}`);
  }
  // create product
  public addProduct(product: any) {
    return this.httpClient.post(this.url +'/product/add', product);
  }

  // update product
  public updateProduct(product: any) {
    // this.getProdId = sessionStorage.getItem('customerID');
    // return this.httpClient.put(`${this.url}/${product.id}`, product);
    return this.httpClient.put(this.url + '/product/update/' + `${product.productId}`, product);
  }
  // public updcustomer(user: any) {
  //   this.getCustId = sessionStorage.getItem('customerID');
  //   console.log("cust" + this.getCustId);

  //   console.log(user);
  //   console.log(this.httpClient.put(this.url + '/updatecust/' + `${this.getCustId}`, user));
  //   return this.httpClient.put(this.url + '/updatecust/' + `${this.getCustId}`, user);
  // }



  // delete product
  public deleteProduct(productId: any) {
    return this.httpClient.delete(this.url + '/product/delete/' + `${productId}`);
    // /product/delete/{id}
  }
}
