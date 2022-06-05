import { createReducer, on } from '@ngrx/store';
import * as fromLogin from '../actions/login.actions';
import { IUser } from '../../interfaces/current.interface';

export const loginFeatureKey = 'login';

export interface State {
    user: IUser;
    error: any;
}

export const initialState: State = 
{
    user: {
      nameid: null,
      family_name: null,
      given_name: null,
      unique_name: null,
      email: null,
      isAuthenticated: null,
      isSubscriber: null,
      isExternalLogger: null,
      isEmailConfirmed: null
    },
    error: null
};

export const reducer = createReducer(
  initialState,
  on(fromLogin.loginSuccess, fromLogin.loginSuccessGoogle, fromLogin.authLinksReload, (state, action) => 
  {
    return {
      ...state,
      user: action.user,
      error: null
    }
  }),
  
  on(fromLogin.loginFailure, fromLogin.loginFailureGoogle, (state, action) => 
  {
    return {
      ...state,
        user: {
        nameid: null,
        family_name: null,  
        given_name: null,
        unique_name: null,
        email: null,
        isAuthenticated: null,
        isSubscriber: null,
        isExternalLogger: null,
        isEmailConfirmed: null
      },
      error: action.error
    }
  }),

  on(fromLogin.logOut, (state, action) => 
  {
    return {
      ...state,
        user: {
        nameid: null,
        family_name: null,
        given_name: null,
        unique_name: null,
        email: null,
        isAuthenticated: null,
        isSubscriber: null,
        isExternalLogger: null,
        isEmailConfirmed: null
      },
      error: null
    }
  })

);