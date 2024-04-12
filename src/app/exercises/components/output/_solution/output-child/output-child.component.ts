import { Component, output } from '@angular/core'

@Component({
  selector: 'app-output-child-solution',
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.css',
  standalone: true,
  imports: [],
})
export class OutputChildSolutionComponent {
  value = 0
  valueChangedEvent = output<number>()

  increment() {
    this.value++
    this.valueChangedEvent.emit(this.value)
  }

  decrease() {
    this.value--
    this.valueChangedEvent.emit(this.value)
  }
}
