import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { OutputParentSolutionComponent } from '../_solution/output-parent.component'
import { OutputParentComponent } from '../exercise/output-parent.component'

@Component({
  selector: 'app-output-parent-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/output/README.md" />
      <app-output-parent-solution solution />
      <app-output-parent user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, OutputParentComponent, OutputParentSolutionComponent],
})
export class OutputPage {}
