import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  last,
  Subject,
  Subscription,
  takeUntil,
  takeWhile,
  tap,
  timer,
} from 'rxjs';
import {
  MILLISCONDS_IN_ONE_SECOND,
  ONE_MINUTE,
} from '../../constants/timer.const';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() minutes!: number;
  @Input() textButton = 'Start';
  @Output() timerStarted = new EventEmitter<void>();
  @Output() timerPaused = new EventEmitter<void>();
  @Output() timerEnded = new EventEmitter<void>();
  @Output() timerSkipped = new EventEmitter<void>();
  isPressed = false;
  remainMinutes = 0;
  private readonly unsubscribe$ = new Subject();
  private timer?: Subscription;

  ngOnInit() {
    this.remainMinutes = this.minutes;
  }

  startTimer() {
    if (this.isPressed) {
      this.timerPaused.emit();
      this.isPressed = false;
      this.textButton = this.getTextButton();
      return this.timer?.unsubscribe();
    }

    this.timerStarted.emit();
    this.isPressed = !this.isPressed;
    this.textButton = this.getTextButton();

    this.timer = timer(MILLISCONDS_IN_ONE_SECOND, MILLISCONDS_IN_ONE_SECOND)
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(() => (this.remainMinutes -= 1 / ONE_MINUTE)),
        takeWhile(() => this.remainMinutes > 0),
        last()
      )
      .subscribe(() => {
        this.timerEnded.emit();
        this.resetTimer();
      });
  }

  private getTextButton() {
    return this.isPressed ? 'Pause' : 'Start';
  }

  private resetTimer() {
    this.isPressed = false;
    this.textButton = this.getTextButton();
    this.remainMinutes = this.minutes;
  }

  skipTimer() {
    this.timerSkipped.emit();
    this.timer?.unsubscribe();
    this.resetTimer();
  }

  ngOnDestroy(): void {
    this.timer?.unsubscribe();
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
