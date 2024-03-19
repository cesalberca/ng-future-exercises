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
      next: 'files-distribution',
      link: '',
      title: 'Hello World (Solution)',
    },
    'hello-world': {
      prev: 'hello-world',
      next: 'files-distribution',
      link: 'hello-world',
      title: 'Hello World (Solution)',
    },
    'files-distribution': {
      prev: 'hello-world',
      next: 'event-exercise-page',
      link: 'files-distribution',
      title: 'Files Distribution (Solution)',
    },
    'event-exercise-page': {
      prev: 'files-distribution',
      next: 'events-list',
      link: 'event-exercise-page',
      title: 'Ejercicio 3. Event.',
    },
    'events-list': {
      prev: 'event-exercise-page',
      next: 'events-list',
      link: 'events-list',
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
