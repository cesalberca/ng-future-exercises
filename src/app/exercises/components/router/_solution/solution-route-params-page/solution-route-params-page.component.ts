import { Component, computed } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-solution-route-params-page',
  templateUrl: './solution-route-params-page.component.html',
  styleUrl: './solution-route-params-page.component.css',
  standalone: true,
})
export class SolutionRouteParamsPageComponent {
  routeParams = toSignal(this.route.params, { initialValue: { id: '' } })
  id = computed(() => this.routeParams().id)

  constructor(private readonly route: ActivatedRoute) {}
}
