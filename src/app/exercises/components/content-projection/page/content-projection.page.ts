import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { ContentProjectionSolutionComponent } from '../_solution/content-projection.component'
import { ContentProjectionComponent } from '../exercise/content-projection.component'

@Component({
  selector: 'app-content-projection-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/content-projection/README.md" />
      <app-content-projection-solution solution />
      <app-content-projection user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, ContentProjectionSolutionComponent, ContentProjectionComponent],
})
export class ContentProjectionPage {}
