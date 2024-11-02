import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, concatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserActions } from './user.actions';
import { UserService } from '../../../shared/services/user.service';

@Injectable()
export class UserEffects {
  getUsersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsersList),
      concatMap((action: any) =>
        this.userService
          .getUsersList(action.pageNumber)
          .pipe(map((usersList) => UserActions.getUsersListSuccess(usersList)))
      )
    )
  );

  getUserDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserDetails),
      concatMap((action: any) =>
        this.userService
          .getUserDetails(action.userId)
          .pipe(
            map((userDetails) => UserActions.getUserDetailsSuccess(userDetails))
          )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
