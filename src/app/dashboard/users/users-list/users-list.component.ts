import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '@ng-user-dashboard/models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  displayedColumns: string[] = [
    'avatar',
    'id',
    'firstName',
    'lastName',
    'email',
  ];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);
  searchValue: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onValueChange(newValue: string) {
    if (newValue.length > 0) {
      const filteredData = ELEMENT_DATA.filter(
        (x) => x.id === Number(newValue)
      );
      this.dataSource.data = filteredData;
    } else {
      this.dataSource.data = ELEMENT_DATA;
    }
  }
}

const ELEMENT_DATA: User[] = [
  {
    id: 1,
    first_name: 'Hydrogen',
    last_name: 'Hydrogen',
    email: 'email',
    avatar: 'test',
  },
  {
    id: 2,
    first_name: 'first_name2',
    last_name: 'last_name2',
    email: 'email2',
    avatar: 'test2',
  },
  {
    id: 3,
    first_name: 'first_name3',
    last_name: 'last_name3',
    email: 'email3',
    avatar: 'test3',
  },
];
