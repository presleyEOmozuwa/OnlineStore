import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ProductService } from '../product.service';
import * as fromProductAction from '../state/product.actions';



@Injectable()
export class ProductEffects 
{  // LOAD PRODUCTS API EFFECTS

    loadProducts$ = createEffect(() => {
      return this.actions$.pipe(
          ofType(fromProductAction.loadProducts),
          mergeMap((action) =>
            this.productService.getAllProducts(action.url).pipe(
              map(data => fromProductAction.loadProductSuccess({ products: data })),
              catchError(error => of(fromProductAction.loadProductFailure({ error: error }))))
            ),
      );
    });

  constructor(private actions$: Actions, private productService: ProductService) {}

}
