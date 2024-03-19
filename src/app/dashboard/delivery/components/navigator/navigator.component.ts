import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core'
import { PageNode } from '../../../domain/page-node'
import { RouterLink } from '@angular/router'
import { Location } from '@angular/common'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroChevronRight, heroChevronLeft } from '@ng-icons/heroicons/outline'

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css',
  standalone: true,
  imports: [RouterLink, NgIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ heroChevronLeft, heroChevronRight })],
})
export class NavigatorComponent {
  @ContentChild(NavigatorComponent, { static: true }) navigatorComponent!: NavigatorComponent
  pagesMap: { [key: string]: PageNode } = {
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
      next: 'event-exercise',
      link: 'files-distribution',
      title: 'Ejercicio 2. Files Distribution',
    },
    'event-exercise': {
      prev: 'files-distribution',
      next: 'events-list',
      link: 'event-exercise',
      title: 'Ejercicio 3. Event.',
    },
    'events-list': {
      prev: 'event-exercise',
      next: 'events-list',
      link: 'events-list',
      title: 'Ejercicio 4. Events List.',
    },
  }
  pagesList = Object.values(this.pagesMap).splice(1)
  currentPage = this.pagesMap[this.location.path().replace('/', '')]

  constructor(private location: Location) {}

  ngDoCheck() {
    const pathname = this.location.path().replace('/', '')
    this.currentPage = this.pagesMap[pathname]
  }
}
