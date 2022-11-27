import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-light-button',
  templateUrl: './light-button.component.html',
  styleUrls: ['./light-button.component.scss'],
})
export class LightButtonComponent {
  @Input() icon!: string;
  @Input() text!: string;
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
