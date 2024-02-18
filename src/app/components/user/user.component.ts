import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'angular-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Output() dataEvent = new EventEmitter<User | null>();

  handleSendData() {
    this.dataEvent.emit({ name: 'John', age: 30 });
  }
}
