import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ListType, User } from '@ng-user-dashboard/models';
import { Store } from '@ngrx/store';
import { getIsLoading, getUsersList } from '../../store/user.selectors';
import { UserActions } from '../../store/user.actions';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  private readonly store = inject(Store);

  usersList$ = this.store.select(getUsersList);
  isLoading$ = this.store.select(getIsLoading);

  private userListSource = new BehaviorSubject<User[]>([]);
  userList$ = this.userListSource.asObservable();

  // To keep track of the search input
  private searchValueSource = new BehaviorSubject<string>('');
  filteredUserList$ = combineLatest([
    this.userList$,
    this.searchValueSource,
  ]).pipe(
    map(([userList, searchValue]) => {
      if (!searchValue) {
        return userList;
      }
      const filterValue = searchValue.toLowerCase();
      return userList.filter((user) =>
        user.id.toString().includes(filterValue)
      );
    })
  );

  selectedListType = ListType.Cards;
  ListType = ListType;
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
    this.usersList$.subscribe((data) => {
      if (data && data.data.length > 0) {
        this.userListSource.next(data.data);
        this.dataSource.data = data.data;
      }
    });
  }

  ngAfterViewInit() {
    this.filteredUserList$.subscribe((filteredData) => {
      this.dataSource.data = filteredData;
    });
    this.dataSource.paginator = this.paginator;
  }

  onValueChange(newValue: string) {
    this.searchValueSource.next(newValue);
  }

  onChangeListType(value: MatButtonToggleChange) {
    this.selectedListType = value.value;
  }

  setPage(value: PageEvent) {
    this.store.dispatch(UserActions.getUsersList(value.pageIndex + 1));
  }
}
