import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() minutes!: number;
  @Input() textButton = 'Start';
  @Output() timerStarted = new EventEmitter<void>();
  @Output() timerPaused = new EventEmitter<void>();
  @Output() timerEnded = new EventEmitter<void>();
  @Output() timerSkipped = new EventEmitter<void>();
  isPressed = false;
  remainMinutes = 0;

  ngOnInit() {
    this.remainMinutes = this.minutes;
  }

  startTimer() {}

  skipTimer() {}
}
