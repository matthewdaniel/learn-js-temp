// string
console.log('this is a string');
console.log('this is also a string');
console.log('this is the best string.');

// Integer
console.log(1);

// Float
console.log(1.5);

// Booleans
console.log(true);
console.log(false);

// nothings
console.log(null);
console.log(undefined);

// bigint
console.log(BigInt(1));

/* Operators */

// Mathematic Operators
console.log(1 + 2 + 3 + 4);
console.log(4 / 2);
console.log(2 * 2);

// Precedence
console.log(3 + 3 / 3);
console.log((3 + 3) / 3);

// we can force precedense with parens

// comparison operators
console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');

console.log(1 < 1);
console.log(1 < 2);
console.log(1 <= 1);

// it is possible to use double equal and you may see it but it is highly discouraged
// for reasons not worth learning at the moment.

// combining strings operator
// unfortunately this operator is overloaded
// meaning it has one meaning in one context (used with numbers)
// and another meaning when used in another (with strings)
console.log('string 1 ' + 'string 2');

// better string method - interpolation
console.log(`three plus four = ${3 + 4}`);

// boolean operators
console.log(!true);
console.log(!false);
console.log(!!true);

console.log(true && true);
console.log(true || true);
console.log(true && false);
console.log(true || false);

// this is confusing because we have to spend time thinking about what gets applied first
// use parens to indicate intent
console.log(true || true && false);
