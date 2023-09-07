import { Component, OnInit } from '@angular/core';
import { UsermanagerService } from '../services/usermanager.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css'],
})
export class DashboardComponentComponent implements OnInit {
  userCount: number =0;
  constructor(public usersService: UsermanagerService) {
    this.usersService.getAll().subscribe((users) => {
      this.userCount = users.length;
    });
  }

  ngOnInit() {}
}
