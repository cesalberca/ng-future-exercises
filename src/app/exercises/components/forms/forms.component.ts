import { Component } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { HabitComponent } from '../habit/habit.component'

export interface FormHabit {
  name: string
  date: Date
}

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule, HabitComponent],
})
export class FormsComponent {
  error_message: string = ''

  habit_form = new FormGroup({
    habit_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })

  habit_list: FormHabit[] = []

  get habit_name() {
    return this.habit_form.controls.habit_name
  }

  onSubmit() {
    if (this.habit_form.controls.habit_name.valid) {
      const new_habit: FormHabit = {
        name: this.habit_form.value.habit_name!,
        date: new Date(Date.now()),
      }

      this.habit_list.push(new_habit)
    }
  }

  format_date(date: Date) {
    return new Intl.DateTimeFormat('es', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date)
  }
}
