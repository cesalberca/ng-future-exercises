import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { SignalsComputedSolutionComponent } from '../_solution/signals-computed.component'
import { SignalsComputedComponent } from '../exercise/signals-computed.component'

@Component({
  selector: 'app-signals-computed-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/signals-computed/README.md" />
      <app-signals-computed-solution solution />
      <app-signals-computed user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, SignalsComputedComponent, SignalsComputedSolutionComponent],
})
export class SignalsComputedPage {}
