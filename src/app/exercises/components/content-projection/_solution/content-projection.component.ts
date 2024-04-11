import { Component } from '@angular/core'
import { ComponentWithNgContentSolutionComponent } from './component-with-ng-content/component-with-ng-content.component'

@Component({
  selector: 'app-content-projection-solution',
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.css',
  standalone: true,
  imports: [ComponentWithNgContentSolutionComponent],
})
export class ContentProjectionSolutionComponent {}
