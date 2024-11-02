import { GResult, PaginationResult, User } from '@ng-user-dashboard/models';

export interface UserState {
  usersList: PaginationResult<User>;
  userDetails: GResult<User>;
  isLoading: boolean;
}

export const USER_STATE = 'user-state';
