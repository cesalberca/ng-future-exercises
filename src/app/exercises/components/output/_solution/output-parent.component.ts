import { Component } from '@angular/core'
import { OutputChildSolutionComponent } from './output-child/output-child.component'

@Component({
  selector: 'app-output-parent-solution',
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.css',
  standalone: true,
  imports: [OutputChildSolutionComponent],
})
export class OutputParentSolutionComponent {
  childValue: number | undefined = undefined

  handleValueChange(event: number) {
    this.childValue = event
  }
}
