import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-light-button',
  templateUrl: './light-button.component.html',
  styleUrls: ['./light-button.component.scss']
})
export class LightButtonComponent {
  @Input() icon!: string;
  @Input() text!: string;
}
