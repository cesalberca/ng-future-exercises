import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { AttributeBindingSolutionComponent } from '../_solution/attribute-binding/attribute-binding-solution.component'
import { AttributeBindingComponent } from '../attribute-binding/attribute-binding.component'

@Component({
  selector: 'app-attribute-binding-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/attribute-binding/README.md" />
      <app-attribute-binding-solution solution [text]="result" />
      <app-attribute-binding user-solution [text]="result" />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, AttributeBindingSolutionComponent, AttributeBindingComponent],
})
export class AttributeBindingPage {
  result = 'ACad'
}
