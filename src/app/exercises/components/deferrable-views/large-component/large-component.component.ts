import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-large-component',
  standalone: true,
  imports: [],
  templateUrl: './large-component.component.html',
  styleUrl: './large-component.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LargeComponent {}
