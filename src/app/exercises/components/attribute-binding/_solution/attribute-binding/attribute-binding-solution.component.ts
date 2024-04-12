import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-attribute-binding-solution',
  standalone: true,
  imports: [],
  templateUrl: './attribute-binding-solution.component.html',
  styleUrl: './attribute-binding-solution.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttributeBindingSolutionComponent {
  text = input.required<string>()

  getMessage() {
    return this.text().length < 5 ? 'Hola mundo' : ''
  }

  getClasses() {
    return {
      'begins-with-letter-a': this.text().toLowerCase().startsWith('a'),
      'long-text': this.text().length > 5,
    }
  }
}
