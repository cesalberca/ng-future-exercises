import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'

import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { ServicesSolutionComponent } from '../_solution/services.component'
import { ServicesComponent } from '../exercise/services.component'

@Component({
  selector: 'app-services-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/services/README.md" />
      <app-services-solution solution />
      <app-services user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, ServicesComponent, ServicesSolutionComponent],
})
export class ServicesPage {}
