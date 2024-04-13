import { Component } from '@angular/core'
import { HabitComponent } from '../habit/habit.component'

export interface CustomHabit {
  name: string
  healthy: boolean
}

@Component({
  selector: 'app-habits-list',
  standalone: true,
  templateUrl: './habits-list.component.html',
  styleUrl: './habits-list.component.css',
  imports: [HabitComponent],
})
export class HabitsListComponent {
  habit_list: CustomHabit[] = [
    { name: 'Nadar', healthy: true },
    { name: 'Comer', healthy: true },
    { name: 'Coding', healthy: false },
  ]
}
