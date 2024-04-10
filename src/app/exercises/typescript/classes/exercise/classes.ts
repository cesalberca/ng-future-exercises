// // @ts-nocheck
// tslint:disable
class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name)
  }

  override move(distance = 5) {
    console.log(this.name + ' moves...')
    super.move(distance)
  }
}

const dog = new Dog('Tobby')
dog.move()

type Person = {
  age: number
}

class ClassWithPrivateMethodsAndProperties {
  publicProperty = 42
  private privateProperty = 42

  publicMethod() {
    return this.privateMethod()
  }

  private privateMethod() {
    return this.privateProperty
  }
}

class ImprovedConstructorAssignment {
  constructor(public name: string) {}

  move(distance: number) {
    console.log('Moved ' + distance + ' meters')
  }
}

class ReadonlyClass {
  constructor(
    public readonly name: string,
    private readonly foo: string,
    private readonly person: Person,
  ) {}

  bar(): string {
    this.person.age = 43
    return this.name + this.foo
  }
}

abstract class CostCalculator {
  abstract billingCost(): number

  calculateCost(baseCost: number) {
    const total = baseCost + this.productionCost() + this.logisticsCost() + this.marketingCost() + this.billingCost()
    return total
  }

  private productionCost() {
    return 5
  }

  private logisticsCost() {
    return 2
  }

  private marketingCost() {
    return 1
  }
}

class SpainCostCalculator extends CostCalculator {
  override billingCost(): number {
    return 21
  }
}

class FranceCostCalculator extends CostCalculator {
  override billingCost(): number {
    return 21
  }
}

export {}
