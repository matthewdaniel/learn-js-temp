/* eslint-disable */
console.clear();

if (true) {
  console.log('I\'m here true');
}

if (null) {
  console.log('I\'m here false');
}

if (false) {
} else {
  console.log('if/else else side')
}

const someNumber = 1;

console.log(`significant digits in ${someNumber}`)
if (someNumber < 1) {
  console.log(0)
} else if (someNumber < 10) {
  console.log(2);
} else if (someNumber < 100) {
  console.log(3)
} else {
  console.log('unknown')
}

// truthy vs true
const emptyString = '';
if (emptyString) {
  console.log(`you'll see this if an empty string is truthy`)
}

const zeroString = '0'
if (zeroString) {
  console.log(`you'll see this if a string with 0 is truthy`)
}

const zero = 0;
if (zero) {
  console.log(`you'll see this if the number zero is truthy`)
}

if (1) {
  console.log(`you'll see this if the number 1 is truthy`)
}