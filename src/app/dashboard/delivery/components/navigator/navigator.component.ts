import { ChangeDetectionStrategy, Component, ContentChild } from '@angular/core'
import { RouterLink, Router } from '@angular/router'
import { Location } from '@angular/common'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroChevronRight, heroChevronLeft } from '@ng-icons/heroicons/outline'
import { pagesMap } from './pages-map'
import { SelectorComponent } from '../selector/selector.component'
import { Option } from '../../../domain/option'

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css',
  standalone: true,
  imports: [RouterLink, NgIconComponent, SelectorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ heroChevronLeft, heroChevronRight })],
})
export class NavigatorComponent {
  @ContentChild(NavigatorComponent, { static: true }) navigatorComponent!: NavigatorComponent
  pagesList = Object.values(pagesMap).splice(1)
  options: Option[] = this.pagesList.map(page => ({ id: page.link, name: page.title }))
  currentPage = pagesMap[this.location.path().replace('/', '')]
  currentOption: Option = { id: this.currentPage.link, name: this.currentPage.title }
  isFirstPage = this.currentPage.prev === null
  isLastPage = this.currentPage.next === null

  onChange = (option: Option) => {
    this.router.navigate([option.id])
  }

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  ngDoCheck() {
    const pathname = this.location.path().replace('/', '')
    this.currentPage = pagesMap[pathname]
    this.currentOption = { id: this.currentPage.link, name: this.currentPage.title }
    this.isFirstPage = this.currentPage.prev === null
    this.isLastPage = this.currentPage.next === null
  }
}
