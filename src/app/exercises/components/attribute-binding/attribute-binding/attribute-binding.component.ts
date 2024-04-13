import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'app-attribute-binding',
  standalone: true,
  imports: [],
  templateUrl: './attribute-binding.component.html',
  styleUrl: './attribute-binding.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttributeBindingComponent {
  text = input.required<string>()

  getClasses() {
    return {
      'start-w-a': this.text().charAt(0) === 'A',
      'l-ge-5': this.text().length >= 5,
    }
  }

  getTitle() {
    let title: string = ''
    if (this.text().length < 5) {
      title = 'Hola mundo'
    }
    return title
  }
}
