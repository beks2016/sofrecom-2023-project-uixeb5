import { Component, Input, OnInit } from '@angular/core';
import { User } from '../core/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor() {}

  @Input() users: User[] = [];
}
