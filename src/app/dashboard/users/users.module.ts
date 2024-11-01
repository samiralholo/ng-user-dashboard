import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }