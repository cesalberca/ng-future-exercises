import { Routes } from '@angular/router'
import { HelloWorldPage } from './exercises/components/hello-world/_solution/hello-world.component'
import { FilesDistributionPage } from './exercises/components/files-distribution/_solution/files-distribution.component'
import { EventPage } from './exercises/components/event/_solution/event.component'

export const routes: Routes = [
  {
    title: 'Hello World',
    path: 'hello-world-solution',
    component: HelloWorldPage,
  },
  {
    title: 'Files Distribution',
    path: 'files-distribution-solution',
    component: FilesDistributionPage,
  },
  {
    title: 'Event',
    path: 'event-solution',
    component: EventPage,
  },
]
