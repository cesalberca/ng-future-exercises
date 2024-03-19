import { Routes } from '@angular/router'
import { EventExercisePage } from './exercises/components/event/page/event-exercise.page'
import { HelloWorldExercisePage } from './exercises/components/hello-world/page/hello-world.page'
import { FilesDistributionPage } from './exercises/components/files-distribution/page/files-distribution.page'
import { EventsListPage } from './exercises/components/events-list/page/events-list.page'

export const routes: Routes = [
  {
    title: 'Hello World',
    path: 'hello-world',
    component: HelloWorldExercisePage,
  },
  {
    title: 'Files Distribution',
    path: 'files-distribution',
    component: FilesDistributionPage,
  },
  {
    title: 'Event',
    path: 'event-exercise-page',
    component: EventExercisePage,
  },
  {
    title: 'Events List',
    path: 'events-list',
    component: EventsListPage,
  },
  {
    title: 'Hello World',
    path: '**',
    component: HelloWorldExercisePage,
  },
]
