import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { SignalsEffectSolutionComponent } from '../_solution/signals-effect.component'
import { SignalsEffectComponent } from '../exercise/signals-effect.component'

@Component({
  selector: 'app-signals-effect-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/signals-effect/README.md" />
      <app-signals-effect-solution solution />
      <app-signals-effect user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, SignalsEffectComponent, SignalsEffectSolutionComponent],
})
export class SignalsEffectPage {}
