import { Routes } from '@angular/router'
import { SolutionRedirectPageComponent } from './_solution/solution-redirect-page/solution-redirect-page.component'
import { RouterPageNotFoundSolutionComponent } from './_solution/not-fount-page/solution-router-page-not-found.component'
import { SolutionRouteParamsPageComponent } from './_solution/solution-route-params-page/solution-route-params-page.component'

export const routesOfRouterExercise: Routes = [
  {
    path: 'solution',
    children: [
      {
        title: 'Router solution with query params Page',
        path: 'page',
        component: SolutionRedirectPageComponent,
      },
      {
        title: 'Router solution with route params Page',
        path: 'page/:id',
        component: SolutionRouteParamsPageComponent,
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
