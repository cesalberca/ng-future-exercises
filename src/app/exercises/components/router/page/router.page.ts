import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { RouterSolutionComponent } from '../_solution/router.component'
import { RouterComponent } from '../exercise/router.component'

@Component({
  selector: 'app-router-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/router/README.md" />
      <app-router-solution solution />
      <app-router user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, RouterComponent, RouterSolutionComponent],
})
export class RouterPage {}
