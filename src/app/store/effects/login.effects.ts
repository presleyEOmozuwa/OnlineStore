import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as fromLogin from '../actions/login.actions';
import { LoginService } from 'src/app/login/login.service';



@Injectable()
export class LoginEffects 
{

  login$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromLogin.loginPage),
        concatMap((action) =>
          this.loginService.login(action.payload).pipe(
            map(user => fromLogin.loginSuccess({ user: user})),
            catchError(error => of(fromLogin.loginFailure({error: error})))
            )
          )
    );
  });

loginWithGoogle$ = createEffect(() => {
  return this.actions$.pipe(
    ofType(fromLogin.loginView),
    concatMap((action) => 
      this.loginService.sendGoogleTokenToServer(action.provider, action.idToken).pipe(
        map(user => fromLogin.loginSuccessGoogle({user: user})),
        catchError(error => of(fromLogin.loginFailureGoogle({error: error})))
      )
    )
  );
});


  constructor(private actions$: Actions, private loginService: LoginService) {}

}

