import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core'
import { PageNode } from '../../../domain/page-node'
import { RouterLink } from '@angular/router'
import { Location } from '@angular/common'

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigatorComponent {
  @ContentChild(NavigatorComponent, { static: true }) navigatorComponent!: NavigatorComponent
  pageList: { [key: string]: PageNode } = {
    '': {
      prev: 'hello-world',
      next: 'files-distribution-solution',
      link: '',
      title: 'Hello World (Solution)',
    },
    'hello-world': {
      prev: 'hello-world',
      next: 'files-distribution-solution',
      link: 'hello-world',
      title: 'Hello World (Solution)',
    },
    'files-distribution-solution': {
      prev: 'hello-world',
      next: 'event-exercise-page',
      link: 'files-distribution-solution',
      title: 'Files Distribution (Solution)',
    },
    'event-exercise-page': {
      prev: 'files-distribution-solution',
      next: 'events-list-solution',
      link: 'event-exercise-page',
      title: 'Ejercicio 3. Event.',
    },
    'events-list-solution': {
      prev: 'event-exercise-page',
      next: 'events-list-solution',
      link: 'events-list-solution',
      title: 'Events List (Solution)',
    },
  }

  currentPage = this.pageList[this.location.path().replace('/', '')]

  constructor(private location: Location) {}

  ngDoCheck() {
    const pathname = this.location.path().replace('/', '')
    this.currentPage = this.pageList[pathname]
  }
}
