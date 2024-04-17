import { Component, input } from '@angular/core'

@Component({
  selector: 'app-solution-route-params-page',
  templateUrl: './solution-route-params-page.component.html',
  styleUrl: './solution-route-params-page.component.css',
  standalone: true,
})
export class SolutionRouteParamsPageComponent {
  id = input.required<number>()
}
