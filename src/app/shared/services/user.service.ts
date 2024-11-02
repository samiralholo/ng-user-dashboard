import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GResult, PaginationResult, User } from '@ng-user-dashboard/models';
import { Observable, of } from 'rxjs';
import { shareReplay, catchError } from 'rxjs/operators';
import { BASE_API } from '@ng-user-dashboard/configs';

@Injectable({ providedIn: 'root' })
export class UserService {
  baseAPI = BASE_API;

  private usersListCache: {
    [page: number]: Observable<PaginationResult<User>>;
  } = {};
  private userDetailsCache: { [id: number]: Observable<GResult<User>> } = {};

  constructor(private httpClient: HttpClient) {}

  getUsersList(pageNumber: number): Observable<PaginationResult<User>> {
    if (!this.usersListCache[pageNumber]) {
      this.usersListCache[pageNumber] = this.httpClient
        .get<PaginationResult<User>>(`${this.baseAPI}?page=${pageNumber}`)
        .pipe(
          shareReplay(1),
          catchError((error) => {
            delete this.usersListCache[pageNumber];
            throw error;
          })
        );
    }
    return this.usersListCache[pageNumber];
  }

  getUserDetails(userId: number): Observable<GResult<User>> {
    if (!this.userDetailsCache[userId]) {
      this.userDetailsCache[userId] = this.httpClient
        .get<GResult<User>>(`${this.baseAPI}/${userId}`)
        .pipe(
          shareReplay(1),
          catchError((error) => {
            delete this.userDetailsCache[userId];
            throw error;
          })
        );
    }
    return this.userDetailsCache[userId];
  }
}
