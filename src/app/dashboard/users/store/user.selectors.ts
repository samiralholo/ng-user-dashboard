import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_STATE, UserState } from './user.state';

export const featureSelector = createFeatureSelector<UserState>(USER_STATE);

export const getUsersList = createSelector(
  featureSelector,
  (state) => state.usersList
);

export const getUserDetails = createSelector(
  featureSelector,
  (state) => state.userDetails
);

export const getIsLoading = createSelector(
  featureSelector,
  (state) => state.isLoading
);
