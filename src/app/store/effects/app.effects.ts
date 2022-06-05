import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as fromLogin from '../actions/login.actions';



@Injectable()
export class AppEffects 
{
  removeUserFromLocalStorage$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromLogin.logOut),
      tap(() => localStorage.removeItem('token'))
    ),
    { dispatch: false }
  );

  /* AddUserToLocalStorage$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromLogin.loginSuccess),
      tap((action) => localStorage.setItem('user', JSON.stringify(action.user)))
    ),
    { dispatch: false }
  ); */

  constructor(private actions$: Actions) {}

}
