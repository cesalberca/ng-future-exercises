import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { CustomPropertiesSolutionComponent } from '../_solution/custom-properties.component'
import { CustomPropertiesComponent } from '../custom-properties.component'

@Component({
  selector: 'app-custom-properties-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/css/custom-properties/README.md" />
      <app-custom-properties-solution solution />
      <app-custom-properties user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, CustomPropertiesSolutionComponent, CustomPropertiesComponent],
})
export class CustomPropertiesPage {}
