import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  standalone: true,
  name: 'lastTimeEdited',
})
export class LastTimeEdited implements PipeTransform {
  transform(date: DateTime): string {
    const dt = date.setLocale('fr').toFormat('MMMM dd, yyyy')
    return `[lte] ${dt.toLocaleString()}`
  }
}
