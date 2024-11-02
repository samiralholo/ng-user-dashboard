import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@ng-user-dashboard/models';
import { Store } from '@ngrx/store';
import { getIsLoading, getUsersList } from '../store/user.selectors';
import { UserActions } from '../store/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  private readonly store = inject(Store);

  usersList$ = this.store.select(getUsersList);
  isLoading$ = this.store.select(getIsLoading);

  userList: User[] = [];

  displayedColumns: string[] = [
    'avatar',
    'id',
    'firstName',
    'lastName',
    'email',
  ];
  dataSource = new MatTableDataSource<User>();
  searchValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.store.dispatch(UserActions.getUsersList());
  }

  ngAfterViewInit() {
    this.usersList$.subscribe((data) => {
      if (data && data.data.length > 0) {
        this.userList = data.data;
        this.dataSource.data = data.data;
      }
    });
    this.dataSource.paginator = this.paginator;
  }

  onValueChange(newValue: string) {
    if (newValue.length > 0) {
      const filteredData = this.userList.filter(
        (x) => x.id === Number(newValue)
      );
      this.dataSource.data = filteredData;
    } else {
      this.dataSource.data = this.userList;
    }
  }

  setPage(value: PageEvent) {
    this.store.dispatch(UserActions.getUsersList(value.pageIndex + 1));
  }
}
