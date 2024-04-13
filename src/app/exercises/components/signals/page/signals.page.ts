import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { SignalsSolutionComponent } from '../_solution/signals.component'
import { SignalsComponent } from '../exercise/signals.component'

@Component({
  selector: 'app-signals-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/signals/README.md" />
      <app-signals-solution solution />
      <app-signals user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, SignalsComponent, SignalsSolutionComponent],
})
export class SignalsPage {}
