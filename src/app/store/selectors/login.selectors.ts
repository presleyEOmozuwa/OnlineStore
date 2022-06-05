import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLoginReducer from '../reducers/login.reducer';

export const selectLoginFeatureKey = createFeatureSelector<fromLoginReducer.State>(
    fromLoginReducer.loginFeatureKey
);

export interface LinksModel
{
    firstName: string;
    loggedIn: boolean;
    externalLogger: boolean;
    emailConfirmed: boolean;
    subscriber: boolean;
}


export const selectLinksModel = createSelector(
    selectLoginFeatureKey,
    (state: fromLoginReducer.State): LinksModel => 
    {
        return {
            firstName: state.user.unique_name,
            loggedIn: state.user.isAuthenticated,
            externalLogger: state.user.isExternalLogger,
            subscriber: state.user.isSubscriber,
            emailConfirmed: state.user.isEmailConfirmed
        };
    }
);


