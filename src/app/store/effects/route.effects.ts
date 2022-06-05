import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as fromLogin from '../actions/login.actions';



@Injectable()
export class RouteEffects 
{
  goHome$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromLogin.logOut),
      tap(() => this.router.navigate(['/']))
    ),
    { dispatch: false }
  );
  
  success$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromLogin.loginSuccess),
      tap(() => 
      {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'];
        (returnUrl != null) ? this.router.navigate([returnUrl]) : this.router.navigate(['/dashboard']);
      })
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router, private route: ActivatedRoute) {}

}