import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { DeferSolutionComponent } from '../_solution/defer.component'
import { DeferComponent } from '../exercise/signals.component'

@Component({
  selector: 'app-defer-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/deferrable-views/README.md" />
      <app-defer-solution solution />
      <app-defer user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, DeferComponent, DeferSolutionComponent],
})
export class DeferPage {}
