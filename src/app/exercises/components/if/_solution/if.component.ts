import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { HabitSolutionComponent } from '../../habit/_solution/habit.component'

@Component({
  selector: 'app-if-solution',
  standalone: true,
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
  imports: [HabitSolutionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IfSolutionComponent {
  habits = input.required<string[]>()
}
