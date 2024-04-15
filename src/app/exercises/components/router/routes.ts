import { Routes } from '@angular/router'
import { SolutionRedirectPageComponent } from './_solution/solution-redirect-page/solution-redirect-page.component'
import { RouterPageNotFoundSolutionComponent } from './_solution/not-fount-page/solution-router-page-not-found.component'

export const routesOfRouterExercise: Routes = [
  {
    path: 'solution',
    children: [
      {
        title: 'Router Solution Page',
        path: 'page',
        component: SolutionRedirectPageComponent,
      },
      {
        path: '**',
        component: RouterPageNotFoundSolutionComponent,
      },
    ],
  },
  {
    path: 'exercise',
    children: [],
  },
]
