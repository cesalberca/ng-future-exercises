import { InjectionToken } from '@angular/core'

export interface Counter {
  getInitialValue(): number
  increment(value: number): number
  decrease(value: number): number
}

export const CounterInjectionToken = new InjectionToken<Counter>('Counter')
