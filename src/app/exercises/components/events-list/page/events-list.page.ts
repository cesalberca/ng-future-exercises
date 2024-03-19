import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { statement } from './statement'
import { MarkdownComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { EventsListSolutionComponent } from '../_solution/events-list.component'
import { EventsListComponent } from '../events-list.component'

@Component({
  selector: 'app-event-exercise-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement [text]="text" />
      <app-events-list-solution solution />
      <app-events-list user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MarkdownComponent, EventsListSolutionComponent, EventsListComponent],
})
export class EventsListPage {
  text = statement
}
