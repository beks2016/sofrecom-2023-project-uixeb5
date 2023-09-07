import { Component, OnInit } from '@angular/core';
import { User } from '../core/user.model';
import { UsermanagerService } from '../services/usermanager.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(public usersService: UsermanagerService) {}
  users: User[] = [];
  type: string = '';
  text: string = '';
  isadded: boolean = false;
  ngOnInit() {
    this.refrech();
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
    this.refrech();
  }
  refrech() {
    this.usersService.getAll().subscribe((users) => {
      this.users = users;
    });
  }
}
