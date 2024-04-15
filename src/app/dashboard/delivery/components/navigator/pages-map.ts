import { PageNode } from '../../../domain/page-node'

export const pagesMap: { [key: string]: PageNode } = {
  '': {
    prev: null,
    next: 'files-distribution',
    link: '',
    title: 'Hello World',
  },
  'hello-world': {
    prev: null,
    next: 'files-distribution',
    link: 'hello-world',
    title: 'Hello World.',
  },
  'files-distribution': {
    prev: 'hello-world',
    next: 'habit-exercise',
    link: 'files-distribution',
    title: 'Files Distribution',
  },
  'habit-exercise': {
    prev: 'files-distribution',
    next: 'attribute-binding',
    link: 'habit-exercise',
    title: 'Habit.',
  },
  'attribute-binding': {
    prev: 'habit-exercise',
    next: 'habits-list',
    link: 'attribute-binding',
    title: 'Attribute binding.',
  },
  'habits-list': {
    prev: 'habit-exercise',
    next: 'conditional-rendering',
    link: 'habits-list',
    title: 'Habits List.',
  },
  'conditional-rendering': {
    prev: 'habits-list',
    next: 'pipes',
    link: 'conditional-rendering',
    title: 'Conditional Rendering.',
  },
  pipes: {
    prev: 'conditional-rendering',
    next: 'reactive-forms',
    link: 'pipes',
    title: 'Pipes',
  },
  'reactive-forms': {
    prev: 'pipes',
    next: 'content-projection',
    link: 'reactive-forms',
    title: 'Formularios Reactivos.',
  },
  router: {
    prev: 'reactive-forms',
    next: 'http-client',
    link: 'router',
    title: 'Router',
  },
  'http-client': {
    prev: 'reactive-forms',
    next: 'content-projection',
    link: 'http-client',
    title: 'Http Client',
  },
  'content-projection': {
    prev: 'reactive-forms',
    next: 'content-projection-multi',
    link: 'content-projection',
    title: 'Content Projection (ng-content)',
  },
  'content-projection-multi': {
    prev: 'content-projection',
    next: 'output',
    link: 'content-projection-multi',
    title: 'Multi-Slot Content Projection',
  },
  output: {
    prev: 'content-projection-multi',
    next: 'signals',
    link: 'output',
    title: 'Output',
  },
  signals: {
    prev: 'output',
    next: 'signals-computed',
    link: 'signals',
    title: 'Signals (writable signals)',
  },
  'signals-computed': {
    prev: 'signals',
    next: 'signals-effect',
    link: 'signals-computed',
    title: 'Computed Signals (read-only signals)',
  },
  'signals-effect': {
    prev: 'signals-computed',
    next: 'custom-properties',
    link: 'signals-effect',
    title: 'Signals Effect',
  },
  'custom-properties': {
    prev: 'signals-computed',
    next: null,
    link: 'custom-properties',
    title: 'Custom Properties.',
  },
}
