import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../core/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent {
  @Output() edit = new EventEmitter<User>();
  @Input('user') defaultUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    id: '',
  };

  addUser(id: string, firstName: string, lastName: string, email: string) {
    console.log('UserFormComponent added ');
    this.edit.emit({ id, firstName, lastName, email });
  }
}
