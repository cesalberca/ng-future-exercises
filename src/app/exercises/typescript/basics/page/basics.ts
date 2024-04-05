// @ts-nocheck
const foo: any = 'foo'
const bar: any = 1
const baz: any = true
const qux: any[] = ['bar', 'baz', 'qux']

const n: any = null

let a: any
a = null

const b: any = Math.random() > 0.5 ? null : 'bar'
// OK: b = null

if (b !== null) {
  const l = b.length
  console.log(l)
}

function sum(a: any, b: any = 1): any {
  return a + b
}

const result = sum(2).toFixed(4)
console.log(result)

const subtract = (a: any, b: any = 1): any => a + b
const result2 = subtract(3)
console.log(result2)

function concatenate(a: any, b: any): any {
  if (b !== null) {
    return a.concat(b)
  }

  return a
}

const x = concatenate('Hello', null)
const y = concatenate('Hello ', 'world')

// Objects
const people: any[] = [
  { age: 42, name: 'Sonia', job: 'Autentia', pet: undefined },
  { age: 32, name: 'Paul', pet: 'lizard' },
]
const ages = people.reduce((a, b) => a + b.age, 0)
console.log(ages)

type Cat = any

const cat: Cat = {
  age: 1,
  name: 'Tobby',
  favouriteToy: 'Ball',
}

function getNameOfCat(cat: any): any {
  return cat.name
}

getNameOfCat(cat)

export {}
