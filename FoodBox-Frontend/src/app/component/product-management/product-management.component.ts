import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/items/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})

export class ProductManagementComponent implements OnInit {

  public products: any;
  public searchItem: any = '';

  // inject data service to load data
  constructor(private productSrv: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    this.productSrv.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }
  onDelete(productId: any) {
    console.log("Delete trigger " + productId);
    this.productSrv.deleteProduct(productId).subscribe(res => {
      console.log("Product is delete sucessfully.");
      this.getProducts();
    });
  }

  onEdit(product: any) {
    // console.log("update trigger ", product);
    this.router.navigateByUrl('/product-management/update', { state: product });
  }
}