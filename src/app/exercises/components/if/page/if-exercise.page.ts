import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { statement } from './statement'
import { MarkdownComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { IfSolutionComponent } from '../_solution/if.component'
import { IfComponent } from '../if.component'

@Component({
  selector: 'app-if-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement [text]="text" />
      <app-if-solution solution [habits]="habits" />
      <app-if user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MarkdownComponent, IfSolutionComponent, IfComponent],
})
export class IfExercisePage {
  text = statement
  habits: string[] = []
}
