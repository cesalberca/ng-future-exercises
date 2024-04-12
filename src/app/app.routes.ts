import { Routes } from '@angular/router'
import { EventExercisePage } from './exercises/components/habit/page/habit-exercise.page'
import { HelloWorldExercisePage } from './exercises/components/hello-world/page/hello-world.page'
import { FilesDistributionPage } from './exercises/components/files-distribution/page/files-distribution.page'
import { HabitsListPage } from './exercises/components/habits-list/page/habits-list.page'
import { IfExercisePage } from './exercises/components/if/page/if-exercise.page'
import { FormsPage } from './exercises/components/forms/page/forms.page'
import { CustomPropertiesPage } from './exercises/css/custom-properties/page/custom-properties.page'
import { ContentProjectionPage } from './exercises/components/content-projection/page/content-projection.page'
import { ContentProjectionMultiPage } from './exercises/components/content-projection-multi/page/content-projection-multi.page'
import { AttributeBindingPage } from './exercises/components/attribute-binding/page/attribute-binding.page'
import { OutputPage } from './exercises/components/output/page/output-parent.page'
import { SignalsPage } from './exercises/components/signals/page/signals.page'
import { SignalsComputedPage } from './exercises/components/signals-computed/page/signals-computed.page'

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
    title: 'Habit',
    path: 'habit-exercise',
    component: EventExercisePage,
  },
  {
    title: 'Attribute binding',
    path: 'attribute-binding',
    component: AttributeBindingPage,
  },
  {
    title: 'Habits List',
    path: 'habits-list',
    component: HabitsListPage,
  },
  {
    title: 'Conditional Rendering',
    path: 'conditional-rendering',
    component: IfExercisePage,
  },
  {
    title: 'Reactive Forms',
    path: 'reactive-forms',
    component: FormsPage,
  },
  {
    title: 'Content Projection',
    path: 'content-projection',
    component: ContentProjectionPage,
  },
  {
    title: 'Content Projection',
    path: 'content-projection-multi',
    component: ContentProjectionMultiPage,
  },
  {
    title: 'Output',
    path: 'output',
    component: OutputPage,
  },
  {
    title: 'Signals (writable signals)',
    path: 'signals',
    component: SignalsPage,
  },
  {
    title: 'Computed Signals (read-only signals)',
    path: 'signals-computed',
    component: SignalsComputedPage,
  },
  {
    title: 'Custom Properties',
    path: 'custom-properties',
    component: CustomPropertiesPage,
  },
  {
    title: 'Hello World',
    path: '**',
    component: HelloWorldExercisePage,
  },
]
