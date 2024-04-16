import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { HelloWorldComponent } from '../hello-world.component'
import { HelloWorldSolutionComponent } from '../_solution/hello-world.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'

@Component({
  selector: 'app-hello-world-page',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/hello-world/README.md" />
      <app-hello-world-solution solution />
      <app-hello-world user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, HelloWorldComponent, HelloWorldSolutionComponent, MdComponent],
})
export class HelloWorldExercisePage {}
