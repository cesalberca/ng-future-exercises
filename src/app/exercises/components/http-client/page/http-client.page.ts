import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { HttpClientComponent } from '../http-client.component'
import { HttpClientSolutionComponent } from '../_solution/http-client-solution.component'

@Component({
  selector: 'app-http-client-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/http-client/README.md" />
      <app-http-client-solution solution />
      <app-http-client user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, HttpClientComponent, HttpClientSolutionComponent],
})
export class HttpClientPage {}
