import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule } from '@angular/router';

const routes =[
  { path:'', component:ProductManagementComponent},
  { path:'create', component:CreateComponent},
  { path:'update', component:UpdateComponent},
 ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }