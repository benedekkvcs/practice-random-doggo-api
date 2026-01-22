import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Output() buttonClick = new EventEmitter<Event>

  onClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
