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
    next: 'habits-list',
    link: 'habit-exercise',
    title: 'Ejercicio 3. Habit.',
  },
  'habits-list': {
    prev: 'habit-exercise',
    next: 'conditional-rendering',
    link: 'habits-list',
    title: 'Ejercicio 4. Habits List.',
  },
  'conditional-rendering': {
    prev: 'habits-list',
    next: 'reactive-forms',
    link: 'conditional-rendering',
    title: 'Ejercicio 5. Conditional Rendering.',
  },
  'reactive-forms': {
    prev: 'conditional-rendering',
    next: 'custom-properties',
    link: 'reactive-forms',
    title: 'Ejercicio 6. Formularios Reactivos.',
  },
  'custom-properties': {
    prev: 'conditional-rendering',
    next: null,
    link: 'custom-properties',
    title: 'Ejercicio 7. Custom Properties.',
  },
}
