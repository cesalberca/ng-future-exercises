import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-services-solution',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  standalone: true,
  imports: [],
})
export class ServicesSolutionComponent {
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
