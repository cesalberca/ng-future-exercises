import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { FormsSolutionComponent } from '../_solution/forms.component'
import { FormsComponent } from '../forms.component'

@Component({
  selector: 'app-hello-world-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/forms/README.md" />
      <app-forms-solution solution />
      <app-forms user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, FormsSolutionComponent, FormsComponent],
})
export class FormsPage {}
