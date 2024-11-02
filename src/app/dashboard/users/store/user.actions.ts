import { createAction } from '@ngrx/store';
import { GResult, PaginationResult, User } from '@ng-user-dashboard/models';

const getUsersList = createAction(
  '[User] Get Users List',
  (pageNumber: number = 1) => ({ pageNumber })
);

const getUsersListSuccess = createAction(
  '[User] Get Users List Success',
  (usersList: PaginationResult<User>) => ({ usersList })
);

const getUserDetails = createAction(
  '[User] Get User Details',
  (userId: number) => ({ userId })
);

const getUserDetailsSuccess = createAction(
  '[User] Get User Details Success',
  (userDetails: GResult<User>) => ({ userDetails })
);

const setIsLoading = createAction(
  '[User] Set is Loading Status',
  (status: boolean) => ({ status })
);

export const UserActions = {
  getUsersList,
  getUsersListSuccess,
  getUserDetails,
  getUserDetailsSuccess,
  setIsLoading,
};
