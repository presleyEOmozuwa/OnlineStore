import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Product } from '../../interfaces/product.interface'
import * as fromProductAction from '../state/product.actions';

export const productsFeatureKey = 'products';

export interface State extends EntityState<Product> {
    error: any;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialState: State = adapter.getInitialState({
    error: null
});

export const reducer = createReducer(
  initialState,
  on(fromProductAction.loadProductSuccess,
    (state, action) => adapter.setAll(action.products, state)
  ),

  on(fromProductAction.loadProductFailure, (state, action) =>
  {
    return {
      ...state,
      error: action.error
    }
  })
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
