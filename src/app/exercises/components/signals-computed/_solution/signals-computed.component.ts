import { Component, computed, signal } from '@angular/core'

@Component({
  selector: 'app-signals-computed-solution',
  templateUrl: './signals-computed.component.html',
  styleUrl: './signals-computed.component.css',
  standalone: true,
  imports: [],
})
export class SignalsComputedSolutionComponent {
  value = signal(0)
  double = computed(() => this.value() * 2)

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
