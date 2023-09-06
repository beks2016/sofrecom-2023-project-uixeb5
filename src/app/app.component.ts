import { Component, OnInit } from '@angular/core';
import { User } from './core/user.model';
import { UsermanagerService } from './services/usermanager.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public usersService: UsermanagerService) {}
  users: User[] = [];
  type: string = '';
  text: string = '';
  isadded: boolean = false;
  ngOnInit() {
    this.usersService.getAll().subscribe((users) => {
      this.users = users;
    });
  }

  onEdit(newUser: User) {
    console.log('AppComponent onEdit');

    this.usersService.add(newUser).subscribe((response) => {});

    if (this.isadded) {
      this.type = 'added';
      this.text = ' added';
    } else {
      this.type = 'error';
      this.text = 'not added';
    }
  }
}
