import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input('label') text = 'Save';
  @Output() appClick = new EventEmitter<number>();
  _message = 'Private Message';

  count = 0;

  onClick(/*event: any*/) {
    // console.log(event);
    if (this.count++ >= 5) {
      this.appClick.emit(this.count);
    }
  }
}
