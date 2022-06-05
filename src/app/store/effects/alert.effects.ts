import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from '@full-fledged/alerts';
import * as fromRegister  from '../actions/register.actions';
import { tap } from 'rxjs/operators';
import * as fromLogin from '../actions/login.actions';
import * as fromProductAction from '../../products/state/product.actions';



@Injectable()
export class AlertEffects 
{

 /*  registerResponse$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromRegister.registerSuccess),
      tap((action) => [this.alertService.info('Check your inbox for account activation link'),this.alertService.success(`${action.res.message}`)])
    ),
    { dispatch: false }
  ); */

  registerInfo$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromRegister.registerFailure),
      tap(() => [this.alertService.info('Check your information'), this.alertService.danger('Registration failed')])
    ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromLogin.loginSuccess),
      tap((action) => this.alertService.success(`Welcome back, ${action.user.given_name}`))
    ),
    { dispatch: false }
  );


  unableToLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromLogin.loginFailure),
      tap(() => [this.alertService.info('Check your information'),this.alertService.danger('Unable to login')])
    ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromLogin.logOut),
      tap(() => this.alertService.danger('You are logged out'))
    ),
    { dispatch: false }
  );

  unableToLoadProducts$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromProductAction.loadProductFailure),
      tap(() => [this.alertService.danger('Unable to load products')])
    ),
    { dispatch: false }
  );


  constructor(private actions$: Actions, private alertService: AlertService) {}

}