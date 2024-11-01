import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersListComponent, UserDetailsComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
