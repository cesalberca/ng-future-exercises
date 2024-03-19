import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { EventSolutionComponent } from '../_solution/event.component'
import { EventComponent } from '../event.component'
import { marked } from 'marked'
import { statement } from './statement'

@Component({
  selector: 'app-event-exercise-page',
  standalone: true,
  template: `
    <app-solution-component>
      <p statement [innerHTML]="convertedData"></p>
      <app-event-solution solution />
      <app-event user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, EventSolutionComponent, EventComponent],
})
export class EventExercisePage {
  md = marked.setOptions({})
  convertedData = this.md.parse(statement)
}
