import { Component, computed, signal } from '@angular/core'

interface Todo {
  name: string
  completed: boolean
}

type FilterStatus = 'all' | 'completed'

@Component({
  selector: 'app-signals-todo-solution',
  templateUrl: './signals-todo.component.html',
  styleUrl: './signals-todo.component.css',
  standalone: true,
  imports: [],
})
export class SignalsTodoSolutionComponent {
  todos = signal<Todo[]>([
    {
      name: 'bar',
      completed: true,
    },
    {
      name: 'baz',
      completed: true,
    },
  ])
  filterStatus = signal<FilterStatus>('all')
  completedTodos = computed(() => this.todos().filter(x => x.completed).length)
  filteredTodos = computed(() =>
    this.todos().filter(x => {
      if (this.filterStatus() === 'all') {
        return true
      } else if (this.filterStatus() === 'completed') {
        return x.completed
      } else {
        return true
      }
    }),
  )

  create() {
    const newTodo: Todo = {
      name: 'Foo',
      completed: false,
    }

    this.todos.update(x => [...x, newTodo])
  }

  changeStatus(status: FilterStatus) {
    this.filterStatus.set(status)
  }
}
