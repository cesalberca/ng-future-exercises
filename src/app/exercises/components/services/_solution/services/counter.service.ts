import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CounterService {
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
