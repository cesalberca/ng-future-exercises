import { Component, computed, effect, signal } from '@angular/core'

@Component({
  selector: 'app-signals-effect-solution',
  templateUrl: './signals-effect.component.html',
  styleUrl: './signals-effect.component.css',
  standalone: true,
  imports: [],
})
export class SignalsEffectSolutionComponent {
  value = signal(0)
  showAlert = computed(() => this.value() > 5)

  constructor() {
    effect(() => {
      if (this.showAlert()) {
        alert('Valor mayor a 5')
      }
    })
  }

  increment() {
    this.value.update(value => value + 1)
  }

  decrease() {
    this.value.update(value => value - 1)
  }
}
