/**
 * Getters and Setters
 */

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  set radius(value) {
    this._radius = value;
  }
}

// ----
class User {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this._firstName = firstName;
    this._lastName = lastName;
  }
}

/**
 * Public fields
 */

class Cat {
  numLegs = 4;
  hasTail = true;

  constructor(name) {
    this.name = name;
  }

  addLegs() {
    this.numLegs += 4;
  }
}

/**
 * Private Fields
 */
class Circle2 {
  #radius;

  constructor(radius) {
    this.#radius = radius;
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    this.#radius = value;
  }
}

/**
 * Private Class
 */
class MyClass {
  #privateMethod() {
    console.log('I am private');
  }

  publicMethod() {
    console.log('I am a private method');
  }

  indirectlyAccessPrivateMethod() {
    return this.#privateMethod();
  }
}

const myClass = new MyClass();
myClass.publicMethod();
myClass.indirectlyAccessPrivateMethod();
