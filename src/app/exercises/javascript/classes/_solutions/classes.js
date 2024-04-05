// Definition of the parent class
class Animal {
  #name // Private field

  constructor(name) {
    this.#name = name
  }

  // Public method to get the animal's name
  getName() {
    return this.#name
  }

  // Public method to emit a generic sound
  makeSound() {
    return 'Making generic sound...'
  }
}

// Definition of the child class inheriting from Animal
class Dog extends Animal {
  #breed // Private field

  constructor(name, breed) {
    super(name)
    this.#breed = breed
  }

  // Public method to get the dog's breed
  getBreed() {
    return this.#breed
  }

  // Method overridden to make a specific dog sound
  makeSound() {
    return 'Woof! Woof!'
  }
}

const animal = new Animal('Animal')
const dog = new Dog('Fido', 'Labrador')
