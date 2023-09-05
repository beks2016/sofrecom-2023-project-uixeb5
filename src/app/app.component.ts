import { Component, OnInit } from '@angular/core';
import { User } from './core/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}
  users: User[] = [];
  type: string = '';
  text: string = '';
  ngOnInit() {}

  onEdit(newUser: User) {
    if (this.users.length < 5) {
      this.type = 'sucess';
      this.text = 'added';
      this.users.push(newUser);
    } else {
      this.type = 'error';
      this.text = 'not added';
    }
  }
}
