import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ProductsRoutingModule } from './products-routing.module';
import { StoreModule } from '@ngrx/store';

import * as fromProduct from './state/product.reducer';
import { ProductEffects } from './state/product.effects';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AddedToCartComponent } from './added-to-cart/added-to-cart.component';
import { PriceFilterWidgetComponent } from './price-filter-widget/price-filter-widget.component';


@NgModule({
  declarations: [
    PriceFilterWidgetComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductViewComponent,
    AddedToCartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    StoreModule.forFeature(fromProduct.productsFeatureKey, fromProduct.reducer),
    EffectsModule.forFeature([ProductEffects])
  ],
})
export class ProductsModule { }
