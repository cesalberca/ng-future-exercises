import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-if',
  standalone: true,
  templateUrl: './if.component.html',
  styleUrl: './if.component.css',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IfComponent {}
