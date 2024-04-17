import { Injectable } from '@angular/core'
import { Counter } from './counter'

@Injectable({
  providedIn: 'root',
})
export class MyCounterService implements Counter {
  getInitialValue() {
    return 0
  }

  increment(value: number) {
    return value + 1
  }

  decrease(value: number) {
    return value - 1
  }
}
