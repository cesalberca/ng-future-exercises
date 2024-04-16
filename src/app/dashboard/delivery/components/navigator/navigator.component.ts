import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core'
import { Router, RouterLink } from '@angular/router'
import { Location } from '@angular/common'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { heroChevronLeft, heroChevronRight } from '@ng-icons/heroicons/outline'
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
export class NavigatorComponent implements DoCheck {
  pagesList = Object.values(pagesMap).splice(1)
  options: Option[] = this.pagesList.map(page => ({ id: page.link, name: page.title }))
  currentPage = this.getCurrentPage()
  currentOption: Option = this.getCurrentOption()
  isFirstPage = this.currentPage.prev === null
  isLastPage = this.currentPage.next === null

  constructor(
    private location: Location,
    private router: Router,
  ) {}

  ngDoCheck() {
    this.currentPage = this.getCurrentPage()
    this.currentOption = this.getCurrentOption()
    this.isFirstPage = this.currentPage.prev === null
    this.isLastPage = this.currentPage.next === null
  }

  getCurrentPage() {
    const pathname = this.location.path().split('/')[1] ?? ''
    return pagesMap[pathname]
  }

  getCurrentOption() {
    return { id: this.currentPage.link, name: this.currentPage.title }
  }

  onChange(option: Option) {
    this.router.navigate([option.id])
  }
}
