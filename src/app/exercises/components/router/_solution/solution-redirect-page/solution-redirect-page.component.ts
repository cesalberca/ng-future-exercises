import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-solution-redirect-page',
  templateUrl: './solution-redirect-page.component.html',
  styleUrl: './solution-redirect-page.component.css',
  standalone: true,
})
export class SolutionRedirectPageComponent implements OnInit {
  title: string | null = null

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.title = params['title']
    })
  }
}
