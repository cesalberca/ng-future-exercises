import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'isToday',
  standalone: true,
})
export class IsTodayPipe implements PipeTransform {
  transform(value: Date): unknown {
    if (value.toDateString() === new Date().toDateString()) {
      return `It's today!`
    }

    return `It's not today`
  }
}
