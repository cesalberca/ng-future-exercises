import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { SignalsTodoSolutionComponent } from '../_solution/signals-todo.component'
import { SignalsTodoComponent } from '../exercise/signals-todo.component'

@Component({
  selector: 'app-signals-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/signals-todo/README.md" />
      <app-signals-todo-solution solution />
      <app-signals-todo user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, SignalsTodoComponent, SignalsTodoSolutionComponent],
})
export class SignalsTodoPage {}
