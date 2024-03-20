import { Component } from '@angular/core'
import { HabitSolutionComponent } from '../../habit/_solution/habit.component'

@Component({
  selector: 'app-habits-list-solution',
  standalone: true,
  templateUrl: './habits-list.component.html',
  styleUrl: './habits-list.component.css',
  imports: [HabitSolutionComponent],
})
export class HabitsListSolutionComponent {
  habits: string[] = ['Meditar', 'Journaling', 'Beber 2L de agua', 'Hacer 10.000 pasos']
}
