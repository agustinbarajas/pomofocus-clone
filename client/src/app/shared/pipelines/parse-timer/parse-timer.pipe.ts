import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseTimer',
})
export class ParseTimerPipe implements PipeTransform {
  transform(value: number): string {
    return '';
  }
}
