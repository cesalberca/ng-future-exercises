// @ts-nocheck
class Animal {
  name: string

  constructor(name: any) {
    this.name = name
  }

  move(distance: any) {
    console.log('Moved ' + distance + ' meters')
  }
}

class Dog extends Animal {
  constructor(name: any) {
    super(name)
  }

  move(distance = 5) {
    console.log(this.name + ' moves...')
    super.move(distance)
  }
}

const dog = new Dog('Tobby')
dog.move()

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
  constructor(public name: any) {}

  move(distance: any) {
    console.log('Moved ' + distance + ' meters')
  }
}

class ReadonlyClass {
  constructor(
    public readonly name: any,
    private readonly foo: any,
    private readonly person: any,
  ) {}

  bar(): any {
    this.person.age = 43
    return this.name + this.foo
  }
}

abstract class CostCalculator {
  abstract billingCost(): any

  calculateCost(baseCost: any) {
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
  override billingCost(): any {
    return 21
  }
}

class FranceCostCalculator extends CostCalculator {
  override billingCost(): any {
    return 21
  }
}

export {}
