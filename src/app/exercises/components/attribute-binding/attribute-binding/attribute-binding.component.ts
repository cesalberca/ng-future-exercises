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
}
