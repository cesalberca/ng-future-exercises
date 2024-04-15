import { Component } from '@angular/core'
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-router-solution',
  templateUrl: './router.component.html',
  styleUrl: './router.component.css',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
})
export class RouterSolutionComponent {
  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['router/solution/page'])
  }
}
