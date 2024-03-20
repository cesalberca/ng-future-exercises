import { PageNode } from '../../../domain/page-node'

export const pagesMap: { [key: string]: PageNode } = {
  '': {
    prev: 'hello-world',
    next: 'files-distribution',
    link: '',
    title: 'Hello World',
  },
  'hello-world': {
    prev: 'hello-world',
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
    next: 'conditional-rendering',
    link: 'conditional-rendering',
    title: 'Ejercicio 5. Conditional Rendering.',
  },
}
