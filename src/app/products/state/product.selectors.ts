import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';
import { Product } from 'src/app/interfaces/product.interface';
import * as fromProductReducer from '../state/product.reducer';

export const selectProductKey = createFeatureSelector<fromProductReducer.State>(
    fromProductReducer.productsFeatureKey
);

export const selectAllProducts = createSelector(
    selectProductKey,
    fromProductReducer.selectAll
);

export const selectAllEntities = createSelector(
    selectProductKey,
    fromProductReducer.selectEntities
);


export const entityExists = (id: number) => createSelector(
    selectAllEntities,
    (entities) =>
    {
        return entities[id];
    }
);

export const selectEntityById = (id: string) =>
    createSelector(
        selectAllEntities,
        (courses) => {
            return courses[id];
        }
    );
