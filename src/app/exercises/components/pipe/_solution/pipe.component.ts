import { Component } from '@angular/core'
import { DatePipe } from '@angular/common'
import { IsTodayPipe } from './is-today.pipe'

@Component({
  selector: 'app-pipe-solution',
  styles: ``,
  template: `
    <div>{{ today | date }}</div>
    <div>{{ today | date: 'yyyy-mm-dd' }}</div>
    <div>{{ today | isToday }}</div>
    <div>{{ yesterday | isToday }}</div>
  `,
  standalone: true,
  imports: [DatePipe, IsTodayPipe],
})
export class PipeSolutionComponent {
  today = new Date()
  yesterday = new Date(new Date().setDate(this.today.getDate() - 1))
}
