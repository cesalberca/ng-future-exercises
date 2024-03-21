import { Component, input, signal, Output, EventEmitter } from '@angular/core'
import { provideIcons, NgIconComponent } from '@ng-icons/core'
import { heroArrowsUpDown } from '@ng-icons/heroicons/outline'
import { Option } from '../../../domain/option'

@Component({
  selector: 'app-selector',
  standalone: true,
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css',
  viewProviders: [provideIcons({ heroArrowsUpDown })],
  imports: [NgIconComponent],
})
export class SelectorComponent {
  @Output()
  selected = new EventEmitter<Option>()
  currentOption = input.required<Option>()
  options = input.required<Option[]>()
  isMenuOpen = signal<boolean>(false)
  toggleMenu = () => this.isMenuOpen.update(prev => !prev)
  onSelect = (option: Option) => {
    this.selected.emit(option)
    this.toggleMenu()
  }
}
