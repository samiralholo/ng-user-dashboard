import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GResult, PaginationResult, User } from '@ng-user-dashboard/models';
import { lastValueFrom, Observable } from 'rxjs';
import { BASE_API } from '@ng-user-dashboard/configs';

@Injectable({ providedIn: 'root' })
export class UserService {
  baseAPI = BASE_API;

  constructor(private httpClient: HttpClient) {}

  getUsersList(pageNumber: number): Observable<PaginationResult<User>> {
    return this.httpClient.get<PaginationResult<User>>(
      `${this.baseAPI}?page=${pageNumber}`
    );
  }

  getUserDetails(userId: number): Observable<GResult<User>> {
    return this.httpClient.get<GResult<User>>(`${this.baseAPI}/${userId}`);
  }
}
