import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { HabitSolutionComponent } from '../../habit/_solution/habit.component'
import { heroShieldExclamation } from '@ng-icons/heroicons/outline'
import { provideIcons, NgIconComponent } from '@ng-icons/core'

@Component({
  selector: 'app-if-solution',
  standalone: true,
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
  imports: [HabitSolutionComponent, NgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ heroShieldExclamation })],
})
export class IfSolutionComponent {
  habits = input.required<string[]>()
}
