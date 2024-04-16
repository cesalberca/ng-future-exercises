import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { FilesDistributionSolutionComponent } from '../_solution/files-distribution.component'
import { FilesDistributionComponent } from '../files-distribution.component'

@Component({
  selector: 'app-hello-world-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/files-distribution/README.md" />
      <app-files-distribution-solution solution />
      <app-files-distribution user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, FilesDistributionSolutionComponent, FilesDistributionComponent],
})
export class FilesDistributionPage {}
