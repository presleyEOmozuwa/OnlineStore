import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concat, of } from 'rxjs';
import { mergeMap, map, catchError, concatMap } from 'rxjs/operators';
import { RegisterService } from 'src/app/register/register.service';
import * as fromRegister from '../actions/register.actions';



@Injectable()
export class RegisterEffects 
{
  registerData$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromRegister.registerData),
        concatMap((action) =>
          this.registerService.register(action.payload).pipe(
            map(response => fromRegister.registerSuccess({ res: response})),
            catchError(error => of(fromRegister.registerFailure({error: error})))
            )
          )
    );
  });

  constructor(private actions$: Actions, private registerService: RegisterService) {}

}
