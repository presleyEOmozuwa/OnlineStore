import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromRegister from './reducers/register.reducer';
import * as fromLogin from './reducers/login.reducer';
import * as fromRouter from '@ngrx/router-store';
import * as fromProduct from '../products/state/product.reducer';


export interface AppState {

  [fromRegister.registerFeatureKey]: fromRegister.State;
  [fromLogin.loginFeatureKey]: fromLogin.State;
  router: fromRouter.RouterReducerState;
  [fromProduct.productsFeatureKey]: fromProduct.State;
}


export const reducers: ActionReducerMap<AppState> = {

  [fromRegister.registerFeatureKey]: fromRegister.reducer,
  
  [fromLogin.loginFeatureKey]: fromLogin.reducer,
  
  router: fromRouter.routerReducer,

  [fromProduct.productsFeatureKey]: fromProduct.reducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];


export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    /* console.log('state', state);
    console.log('action', action); */
    return reducer(state, action);
  };
}
