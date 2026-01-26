import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  label = input.required<string>();
  buttonClick = output<Event>();

  onClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
