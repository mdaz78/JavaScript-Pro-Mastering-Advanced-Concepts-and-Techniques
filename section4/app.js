// -- this --

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }

  dance(style = 'tango') {
    console.log(this);
    return `Meow, I am ${this.firstName} and I like to ${style}`;
  }
}

function greet() {
  return 'HI THERE';
}

// -- call --

const conan = {
  name: 'Conan',
  city: 'LA',
  sing: function () {
    console.log('THIS is -> ', this);
    console.log(`${this.name} sings la la la`);
    return `${this.name} sings la la la`;
  },
};

const lisa = {
  name: 'Lisa',
  city: 'NY',
};

console.log(conan.sing.call(lisa));

// -- apply --
const ringo = {
  firstName: 'Ringo',
  greet: function (greeting) {
    console.log(`${this.firstName} says ${greeting}`);
  },
};

console.log(ringo.greet('hello'));

const george = {
  firstName: 'George',
  lastName: 'Harrison',
};

console.log(ringo.greet.apply(george, ['hola']));

// -- bind --
const blob = {
  firstName: 'Blob',
  greet: function (greeting) {
    console.log(`${this.firstName} says ${greeting}`);
  },
};

console.log(blob.greet('hello'));

const alex = {
  firstName: 'Alex',
  lastName: 'Harrison',
};

const alexSings = blob.greet.bind(alex);
console.log(alexSings('boo'));

// -- binding arguments --
function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

const applyCASalesTax = applySalesTax.bind(null, 0.0725);
console.log(applyCASalesTax(50));

const applyIndiaSalesTax = applySalesTax.bind(null, 18);
console.log(applyIndiaSalesTax(100));

// -- bind example --
const btn = document.querySelector('#btn');
btn.addEventListener('click', conan.sing.bind(conan));
