// @ts-nocheck

interface Employee {
  name: string
  age?: number
  lastName: string
  work: number | null
}

type NamedEmployee = any
type NamedEmployeeTwo = any
type OptionalEmployee = any
type RequiredEmployee = any
type NonNullableEmployee = any

type Basket = any

const basket: Basket = {
  foo: 1,
  bar: 2,
  // @ts-expect-error
  baz: 'qux',
}

export {}
