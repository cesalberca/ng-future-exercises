import { Component, computed } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-solution-redirect-page',
  templateUrl: './solution-redirect-page.component.html',
  styleUrl: './solution-redirect-page.component.css',
  standalone: true,
})
export class SolutionRedirectPageComponent {
  queryParams = toSignal(this.route.queryParams, { initialValue: { title: '' } })
  title = computed(() => this.queryParams().title)

  constructor(private readonly route: ActivatedRoute) {}
}
