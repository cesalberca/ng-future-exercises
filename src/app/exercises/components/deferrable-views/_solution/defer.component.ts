import { Component } from '@angular/core'
import { LargeComponent } from '../large-component/large-component.component'

@Component({
  selector: 'app-defer-solution',
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.css',
  standalone: true,
  imports: [LargeComponent],
})
export class DeferSolutionComponent {}
