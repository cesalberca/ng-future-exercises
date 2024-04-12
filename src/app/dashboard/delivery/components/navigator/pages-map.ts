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
    title: 'Ejercicio 1. Hello World.',
  },
  'files-distribution': {
    prev: 'hello-world',
    next: 'habit-exercise',
    link: 'files-distribution',
    title: 'Ejercicio 2. Files Distribution',
  },
  'habit-exercise': {
    prev: 'files-distribution',
    next: 'attribute-binding',
    link: 'habit-exercise',
    title: 'Ejercicio 3. Habit.',
  },
  'attribute-binding': {
    prev: 'habit-exercise',
    next: 'habits-list',
    link: 'attribute-binding',
    title: 'Ejercicio 4. Attribute binding.',
  },
  'habits-list': {
    prev: 'habit-exercise',
    next: 'conditional-rendering',
    link: 'habits-list',
    title: 'Ejercicio 5. Habits List.',
  },
  'conditional-rendering': {
    prev: 'habits-list',
    next: 'reactive-forms',
    link: 'conditional-rendering',
    title: 'Ejercicio 6. Conditional Rendering.',
  },
  'reactive-forms': {
    prev: 'conditional-rendering',
    next: 'content-projection',
    link: 'reactive-forms',
    title: 'Ejercicio 7. Formularios Reactivos.',
  },
  'content-projection': {
    prev: 'reactive-forms',
    next: 'content-projection-multi',
    link: 'content-projection',
    title: 'Ejercicio 8. Content Projection (ng-content)',
  },
  'content-projection-multi': {
    prev: 'content-projection',
    next: 'output',
    link: 'content-projection-multi',
    title: 'Ejercicio 9. Multi-Slot Content Projection',
  },
  output: {
    prev: 'content-projection-multi',
    next: 'signals',
    link: 'output',
    title: 'Ejercicio 10. Output',
  },
  signals: {
    prev: 'output',
    next: 'signals-computed',
    link: 'signals',
    title: 'Ejercicio 11. Signals (writable signals)',
  },
  'signals-computed': {
    prev: 'signals',
    next: 'custom-properties',
    link: 'signals-computed',
    title: 'Ejercicio 12. Computed Signals (read-only signals)',
  },
  'custom-properties': {
    prev: 'signals-computed',
    next: null,
    link: 'custom-properties',
    title: 'Ejercicio 13. Custom Properties.',
  },
}
