import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from "ngx-spinner";
import * as fromRegister  from '../actions/register.actions';
import { tap } from 'rxjs/operators';
import * as fromLogin from '../actions/login.actions';
import * as fromProductAction from '../../products/state/product.actions';



@Injectable()
export class SpinnerEffects 
{
    spinneron$ = createEffect(
      () => this.actions$.pipe(
        ofType(fromRegister.registerData, fromLogin.loginPage, fromProductAction.loadProducts),
        tap(() => this.spinner.show())
      ),
      { dispatch: false }
    );

    spinneroff$ = createEffect(
      () => this.actions$.pipe(
        ofType(fromRegister.registerSuccess, fromRegister.registerFailure, fromLogin.loginSuccess, fromLogin.loginFailure, fromProductAction.loadProductSuccess, fromProductAction.loadProductFailure),
        tap(() => {
          setTimeout(() => this.spinner.hide(), 1000)
        })
      ),
      { dispatch: false }
    );
  
  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}

}
