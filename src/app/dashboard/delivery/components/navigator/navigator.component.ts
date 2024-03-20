import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Location } from '@angular/common'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroChevronRight, heroChevronLeft } from '@ng-icons/heroicons/outline'
import { pagesMap } from './pages-map'

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

  pagesList = Object.values(pagesMap).splice(1)
  currentPage = pagesMap[this.location.path().replace('/', '')]

  constructor(private location: Location) {}

  ngDoCheck() {
    const pathname = this.location.path().replace('/', '')
    this.currentPage = pagesMap[pathname]
  }
}
