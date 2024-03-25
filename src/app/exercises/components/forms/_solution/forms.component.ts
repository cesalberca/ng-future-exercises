import { Component, signal } from '@angular/core'
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms'
import { LastTimeEdited } from './last-time-edited.pipe'
import { provideIcons, NgIconComponent } from '@ng-icons/core'
import { heroShieldExclamation } from '@ng-icons/heroicons/outline'
import { DateTime } from 'luxon'

@Component({
  selector: 'app-forms-solution',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule, LastTimeEdited, NgIconComponent],
  viewProviders: [provideIcons({ heroShieldExclamation })],
})
export class FormsSolutionComponent {
  errorMessage = signal<string>('')
  habits = signal<{ habit: string; date: DateTime }[]>([])
  habitForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  handleSubmit() {
    if (this.habitForm.status === 'INVALID') {
      this.errorMessage.set('El nombre del hábito debe tener, al menos, 2 letras')
      return
    }
    this.errorMessage.set('')
    const newHabit: { habit: string; date: DateTime } = {
      habit: this.habitForm.value.name!,
      date: DateTime.now(),
    }
    this.habits.update(prev => [...prev, newHabit])
    this.habitForm.reset()
  }
}
