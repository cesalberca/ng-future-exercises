import { Component } from '@angular/core'
import { SolutionComponent } from '../../../../dashboard/delivery/components/solution/solution.component'
import { MdComponent } from '../../../../dashboard/delivery/components/markdown/markdown.component'
import { HabitsListSolutionComponent } from '../_solution/habits-list.component'
import { HabitsListComponent } from '../habits-list.component'

@Component({
  selector: 'app-habits-list-exercise',
  standalone: true,
  template: `
    <app-solution-component>
      <app-markdown src="assets/app/exercises/components/habits-list/README.md" />
      <app-habits-list-solution solution />
      <app-habits-list user-solution />
    </app-solution-component>
  `,
  imports: [SolutionComponent, MdComponent, HabitsListSolutionComponent, HabitsListComponent],
})
export class HabitsListPage {}
