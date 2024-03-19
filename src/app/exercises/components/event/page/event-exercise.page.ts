import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { EventSolutionComponent } from '../_solution/event.component'
import { EventComponent } from '../event.component'
import { statement } from './statement'
import { MarkdownComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'

@Component({
  selector: 'app-event-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement [text]="text" />
      <app-event-solution solution event="Meditar" />
      <app-event user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, EventSolutionComponent, EventComponent, MarkdownComponent],
})
export class EventExercisePage {
  text = statement
}
