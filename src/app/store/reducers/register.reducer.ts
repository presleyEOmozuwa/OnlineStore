import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { IRegisterResponse } from 'src/app/interfaces/register-user.interfaces';
import * as fromRegister from '../actions/register.actions';


export const registerFeatureKey = 'register';

export interface State 
{
  registerResponse: IRegisterResponse,
  error: any
}

export const initialState: State = 
{
    registerResponse : {
      message: null,
      isRegistered: null
    },
    error: null
};

export const reducer = createReducer(
  initialState,
  on(fromRegister.registerSuccess, (state, action) =>
  {
    return {
      ...state,
      registerResponse: action.res,
      error: null
    }
  }),

  on(fromRegister.registerFailure, (state, action) =>
  {
    return {
      ...state,
      registerResponse: {
        message: null,
        isRegistered: null
      },
      error: action.error
    }
  })

);
