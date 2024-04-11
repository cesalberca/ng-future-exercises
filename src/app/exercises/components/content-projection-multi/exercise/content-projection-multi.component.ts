import { Component } from '@angular/core'
import { ComponentWithMultiNgContentComponent } from './component-with-multi-ng-content/component-with-multi-ng-content.component'

@Component({
  selector: 'app-content-projection-multi',
  templateUrl: './content-projection-multi.component.html',
  styleUrl: './content-projection-multi.component.css',
  standalone: true,
  imports: [ComponentWithMultiNgContentComponent],
})
export class ContentProjectionMultiComponent {}
