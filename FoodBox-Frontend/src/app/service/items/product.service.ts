import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  private url: string = 'http://localhost:3000/products';

  public getProducts() {
    return this.httpClient.get(this.url);
  }

  public getProductByType(type: string) {
    return this.httpClient.get(`${this.url}?type=${type}`);
  }
  // add product
  public addProduct(product: any) {
    return this.httpClient.post(this.url, product);
  }

  // update product
  public updateProduct(product: any) {
    return this.httpClient.put(`${this.url}/${product.id}`, product);
  }
  // delete product
  public deleteProduct(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
