import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GResult, PaginationResult, User } from '../models';
import { lastValueFrom } from 'rxjs';
import { BASE_API } from '@ng-user-dashboard/configs';

@Injectable({ providedIn: 'root' })
export class UserService {
  baseAPI = BASE_API;

  constructor(private httpClient: HttpClient) {}

  async getUsersList(pageNumber: number): Promise<PaginationResult<User>> {
    return lastValueFrom(
      this.httpClient.get<PaginationResult<User>>(
        `${this.baseAPI}?page=${pageNumber}`
      )
    );
  }

  async getUserDetails(userId: number): Promise<GResult<User>> {
    return lastValueFrom(
      this.httpClient.get<GResult<User>>(`${this.baseAPI}/${userId}`)
    );
  }
}
