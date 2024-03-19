import { Routes } from '@angular/router'
import { FilesDistributionPage } from './exercises/components/files-distribution/_solution/files-distribution.component'
import { EventsListPage } from './exercises/components/events-list/_solution/events-list.component'
import { EventExercisePage } from './exercises/components/event/page/event-exercise.page'
import { HelloWorldExercisePage } from './exercises/components/hello-world/page/hello-world.page'

export const routes: Routes = [
  {
    title: 'Hello World',
    path: 'hello-world',
    component: HelloWorldExercisePage,
  },
  {
    title: 'Files Distribution',
    path: 'files-distribution-solution',
    component: FilesDistributionPage,
  },
  {
    title: 'Event',
    path: 'event-exercise-page',
    component: EventExercisePage,
  },
  {
    title: 'Events List',
    path: 'events-list-solution',
    component: EventsListPage,
  },
  {
    title: 'Hello World',
    path: '**',
    component: HelloWorldExercisePage,
  },
]
