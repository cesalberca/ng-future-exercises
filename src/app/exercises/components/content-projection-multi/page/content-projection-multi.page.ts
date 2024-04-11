import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { ContentProjectionMultiSolutionComponent } from '../_solution/content-projection-multi.component'
import { ContentProjectionMultiComponent } from '../exercise/content-projection-multi.component'

@Component({
  selector: 'app-content-projection-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement src="assets/app/exercises/components/content-projection-multi/README.md" />
      <app-content-projection-multi-solution solution />
      <app-content-projection-multi user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, ContentProjectionMultiSolutionComponent, ContentProjectionMultiComponent],
})
export class ContentProjectionMultiPage {}
