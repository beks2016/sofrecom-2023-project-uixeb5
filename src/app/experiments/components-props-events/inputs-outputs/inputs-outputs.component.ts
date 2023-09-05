import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs-outputs',
  templateUrl: './inputs-outputs.component.html',
  styleUrls: ['./inputs-outputs.component.css'],
})
export class InputsOutputsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClick(counter: number) {
    console.log('appClick event on app-button after counter', counter);
  }
}
