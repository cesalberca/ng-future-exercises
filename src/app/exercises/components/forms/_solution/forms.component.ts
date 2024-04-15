import { Component } from '@angular/core'
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

interface Model {
  name: FormControl<string>
}

@Component({
  selector: 'app-forms-solution',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule],
})
export class FormsSolutionComponent {
  errorMessage = ''
  habits: { habit: string; date: Date }[] = []
  habitForm = new FormGroup<Model>({
    name: new FormControl('', { validators: [Validators.required, Validators.minLength(2)], nonNullable: true }),
  })
  habitFormBuilder = this.formBuilder.group({
    name: ['', Validators.required, Validators.minLength(2)],
  })

  constructor(private readonly formBuilder: NonNullableFormBuilder) {}

  format(date: Date) {
    return new Intl.DateTimeFormat('es', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date)
  }

  handleSubmit() {
    if (this.habitForm.status === 'INVALID') {
      this.errorMessage = 'El nombre del hábito debe tener, al menos, 2 letras'
      return
    }
    this.errorMessage = ''
    const newHabit: { habit: string; date: Date } = {
      habit: this.habitForm.value.name!,
      date: new Date(),
    }
    this.habits = [...this.habits, newHabit]
    this.habitForm.reset()
  }
}
