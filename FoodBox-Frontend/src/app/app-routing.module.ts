import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { HomeComponent } from './component/home/home.component';
import { ItemPageComponent } from './component/item-page/item-page.component';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { OrderComponent } from './component/order/order.component';
import { ProductManagementComponent } from './component/product-management/product-management.component';
import { ProductManagementModule } from './component/product-management/product-management.module';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'item-page/:type', component: ItemPageComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'order', component: OrderComponent },
    { path: 'product-management', loadChildren: () => import('./component/product-management/product-management-routing.module').then(m => m.ProductManagementRoutingModule) },
    // { path: 'users', loadChildren: () => import('./component/users/user-routing.module').then(m => m.UserRoutingModule) },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductManagementModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
