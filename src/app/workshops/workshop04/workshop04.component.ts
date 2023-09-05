import { Component, OnInit } from '@angular/core';
import { User } from '../../core/user.model';

@Component({
  selector: 'app-workshop04',
  templateUrl: './workshop04.component.html',
  styleUrls: ['./workshop04.component.css'],
})
export class Workshop04Component {
  users: User[] = [];
  isAdded = false;
  isError = false;
  defaultUser: User = {
    firstName: 'Muhammad',
    lastName: 'Ali',
    email: 'm.a@gmail.com',
  };
  addUser(firstName: string, lastName: string, email: string) {
    this.isAdded = false;
    this.isError = false;
    if (this.users.length <= 5) {
      this.users.push({
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      this.isAdded = true;
      this.isError = false;
    } else {
      this.isAdded = false;
      this.isError = true;
    }
    console.log(this.users);
  }
}
