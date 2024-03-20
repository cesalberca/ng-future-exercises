import { Component, input } from '@angular/core'

@Component({
  selector: 'app-habit-solution',
  styleUrl: './habit.component.css',
  templateUrl: './habit.component.html',
  standalone: true,
  imports: [],
})
export class HabitSolutionComponent {
  habit = input.required<string>()
}
