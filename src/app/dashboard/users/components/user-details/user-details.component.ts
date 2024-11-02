import { Component, OnInit } from '@angular/core';
import { User } from '@ng-user-dashboard/models';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null;

  ngOnInit(): void {
    this.user = {
      id: 1,
      first_name: 'first_name',
      last_name: 'last_name',
      email: 'email',
      avatar:
        'https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_neytiri_16x9_1098_01_0e7d844a.jpeg',
    };
  }
}
