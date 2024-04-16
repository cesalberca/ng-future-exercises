import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { PipeComponent } from '../pipe.component'
import { PipeSolutionComponent } from '../_solution/pipe.component'

@Component({
  selector: 'app-pipe-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/pipe/README.md" />
      <app-pipe-solution solution />
      <app-pipe user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, PipeSolutionComponent, PipeComponent],
})
export class PipePage {}
