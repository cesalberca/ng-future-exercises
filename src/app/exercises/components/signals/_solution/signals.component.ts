import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-signals-solution',
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  standalone: true,
  imports: [],
})
export class SignalsSolutionComponent {
  value = signal(0)

  reset() {
    this.value.set(0)
  }

  increment() {
    this.value.update(value => value + 1)
  }

  decrease() {
    this.value.update(value => value - 1)
  }
}
