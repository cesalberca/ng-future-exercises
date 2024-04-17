import { Component, Inject, signal } from '@angular/core'
import { Counter, CounterInjectionToken } from './services/counter'

@Component({
  selector: 'app-services-solution',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  standalone: true,
  imports: [],
})
export class ServicesSolutionComponent {
  value = signal(this.counter.getInitialValue())

  constructor(@Inject(CounterInjectionToken) private readonly counter: Counter) {}

  reset() {
    this.value.set(this.counter.getInitialValue())
  }

  increment() {
    this.value.update(value => this.counter.increment(value))
  }

  decrease() {
    this.value.update(value => this.counter.decrease(value))
  }
}
