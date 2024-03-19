import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { statement } from './statement'
import { MarkdownComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { FilesDistributionSolutionComponent } from '../_solution/files-distribution.component'
import { FilesDistributionComponent } from '../files-distribution.component'

@Component({
  selector: 'app-hello-world-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown statement [text]="text" />
      <app-files-distribution-solution solution />
      <app-files-distribution user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MarkdownComponent, FilesDistributionSolutionComponent, FilesDistributionComponent],
})
export class FilesDistributionPage {
  text = statement
}
