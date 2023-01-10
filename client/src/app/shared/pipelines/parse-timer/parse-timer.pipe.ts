import { Pipe, PipeTransform } from '@angular/core';
import { ONE_MINUTE } from '../../constants/timer.const';

@Pipe({
  name: 'parseTimer',
})
export class ParseTimerPipe implements PipeTransform {
  transform(value: number): string {
    const timerSeconds = value * ONE_MINUTE;
    const seconds = Math.floor(timerSeconds % ONE_MINUTE);
    const minutes = Math.floor(timerSeconds / ONE_MINUTE);

    return `${this.padTimer(minutes)}:${this.padTimer(seconds)}`;
  }

  padTimer(timer: number): string {
    return timer.toString().padStart(2, '0');
  }
}
