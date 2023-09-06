import { Component, Input, OnInit } from '@angular/core';
import { User } from '../core/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  constructor(private usersService: UsersService) {}

  @Input() users: User[] = [];
}
