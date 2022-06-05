import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AddedToCartComponent } from './added-to-cart/added-to-cart.component';
import { AuthGuard } from '../route-protector/auth.guard';

const routes: Routes = [
  { path: 'item', component: ProductItemComponent },
  { path: 'view/:courseId', component: ProductViewComponent },
  { path: 'added-to-cart/:courseId', component: AddedToCartComponent, canActivate: [AuthGuard]},
  { path: '', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
