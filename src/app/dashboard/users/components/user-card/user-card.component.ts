import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@ng-user-dashboard/models';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user!: User;
  @Output() onShowDetails = new EventEmitter<void>();

  onClick() {
    this.onShowDetails.emit();
  }
}
