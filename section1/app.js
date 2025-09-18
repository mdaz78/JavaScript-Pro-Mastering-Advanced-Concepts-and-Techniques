const key = 'species';

const pet = {
  species: 'dog',
  name: 'Elton',
  age: 1.5,
};

pet[true] = 'hello!!!!';

pet.bark = function () {
  return 'Woof-woof!';
};

// Mixing Data and Functionalities

// Area of right triangle
function getTriangleArea(a, b) {
  return (a * b) / 2;
}

// Hypotenuse of right triangle
function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

// Using a POJO
const myTriangle = {
  a: 3,
  b: 4,
  getArea: function () {
    return (this.a * this.b) / 2;
  },
  getHypotenuse: function () {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

/**
 *
 *
 * Classes
 *
 *
 */

class Triangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

const myTriangle2 = new Triangle(3, 4);
console.log(myTriangle2.getArea());
console.log(myTriangle2.getHypotenuse());

/**
 * Bank Account Class
 * - Properties
 *  - Balance (defaults to 0 if not provided)
 *  - Account holder
 *  - Account number
 * - Methods
 *  - deposit(amount) -> increase balance by amt
 *  - withdraw(amount) -> decrease balance by amt
 */

class BankAccount {
  constructor(accountHolder, accountNumber, balance = 0) {
    this.balance = balance;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;

    if (!Number.isFinite(balance)) {
      throw new Error('Balance must be a number ', balance);
    }

    if (this.accountHolder === '' || typeof this.accountHolder !== 'string') {
      throw new Error(
        'Account holder must be a non-empty string',
        accountHolder
      );
    }

    if (!Number.isFinite(this.accountNumber) || this.accountNumber <= 0) {
      throw new Error(
        'Account number must be a positive number',
        accountNumber
      );
    }
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Insufficient funds', amount);
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}
