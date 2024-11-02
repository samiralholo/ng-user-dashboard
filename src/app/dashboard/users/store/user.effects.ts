import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, concatMap, tap, finalize } from 'rxjs/operators';
import { UserActions } from './user.actions';
import { UserService } from '../../../shared/services/user.service';

@Injectable()
export class UserEffects {
  private readonly actions$ = inject(Actions);
  private readonly userService = inject(UserService);
  private readonly store = inject(Store);

  getUsersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsersList),
      tap(() => this.store.dispatch(UserActions.setIsLoading(true))),
      concatMap((action: any) =>
        this.userService.getUsersList(action.pageNumber).pipe(
          map((usersList) => UserActions.getUsersListSuccess(usersList)),
          finalize(() => this.store.dispatch(UserActions.setIsLoading(false)))
        )
      )
    )
  );

  getUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserDetails),
      tap(() => this.store.dispatch(UserActions.setIsLoading(true))),
      concatMap((action: any) =>
        this.userService.getUserDetails(action.userId).pipe(
          map((userDetails) => UserActions.getUserDetailsSuccess(userDetails)),
          finalize(() => this.store.dispatch(UserActions.setIsLoading(false)))
        )
      )
    )
  );
}
