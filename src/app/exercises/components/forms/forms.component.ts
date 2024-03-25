import { Component } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css',
  imports: [ReactiveFormsModule],
})
export class FormsComponent {}
