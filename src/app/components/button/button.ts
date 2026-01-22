import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  @Input() label = '';
  @Input() disabled = false;

  @Output() buttonClick = new EventEmitter<Event>

  onClick(event: Event): void {
    this.buttonClick.emit(event);
  }
}
