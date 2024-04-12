import { Component } from '@angular/core'
import { ComponentWithMultiNgContentSolutionComponent } from './component-with-multi-ng-content/component-with-multi-ng-content.component'

@Component({
  selector: 'app-content-projection-multi-solution',
  templateUrl: './content-projection-multi.component.html',
  styleUrl: './content-projection-multi.component.css',
  standalone: true,
  imports: [ComponentWithMultiNgContentSolutionComponent],
})
export class ContentProjectionMultiSolutionComponent {}
