import { Component, signal } from '@angular/core'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-forms-solution',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule],
})
export class FormsSolutionComponent {
  errorMessage = signal<string>('')
  habits = signal<{ habit: string; date: Date }[]>([])
  habitForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })
  handleSubmit() {
    if (this.habitForm.status === 'INVALID') {
      this.errorMessage.set('El nombre del hábito debe tener, al menos, 2 letras')
      return
    }
    this.errorMessage.set('')
    const newHabit: { habit: string; date: Date } = {
      habit: this.habitForm.value.name!,
      date: new Date(),
    }
    this.habits.update(prev => [...prev, newHabit])
    this.habitForm.reset()
  }
}
