import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { GResult, PaginationResult, User } from '@ng-user-dashboard/models';
import { UserActions } from './user.actions';
import { UserState } from './user.state';

export const GetUsersListReducer = createReducer(
  null as unknown as PaginationResult<User>,
  on(UserActions.getUsersListSuccess, (_, { usersList }) => usersList)
);

export const GetUserDetailsReducer = createReducer(
  null as unknown as GResult<User>,
  on(UserActions.getUserDetailsSuccess, (_, { userDetails }) => userDetails)
);

export const SetIsLoadingReducer = createReducer(
  false,
  on(UserActions.setIsLoading, (_, { status }) => status)
);

export const UserReducer: ActionReducerMap<UserState> = {
  usersList: GetUsersListReducer,
  userDetails: GetUserDetailsReducer,
  isLoading: SetIsLoadingReducer,
};
