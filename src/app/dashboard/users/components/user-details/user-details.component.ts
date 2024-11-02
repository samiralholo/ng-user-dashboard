import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@ng-user-dashboard/models';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getIsLoading, getUserDetails } from '../../store/user.selectors';
import { UserActions } from '../../store/user.actions';
import { FADE_IN } from '@ng-user-dashboard/animation';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
  animations: [FADE_IN],
})
export class UserDetailsComponent implements OnInit {
  private readonly store = inject(Store);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  user$: Observable<User> = this.store.select(getUserDetails);
  isLoading$: Observable<boolean> = this.store.select(getIsLoading);

  ngOnInit(): void {
    const userId = this.activatedRoute.snapshot.params['userId'];
    this.store.dispatch(UserActions.getUserDetails(Number(userId)));
  }

  onBackButton() {
    this.location.back();
  }
}
