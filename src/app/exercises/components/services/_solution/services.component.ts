import { Component, signal } from '@angular/core'
import { CounterService } from './services/counter.service'

@Component({
  selector: 'app-services-solution',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  standalone: true,
  imports: [],
})
export class ServicesSolutionComponent {
  value = signal(this.counter.getInitialValue())

  constructor(private readonly counter: CounterService) {}

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
