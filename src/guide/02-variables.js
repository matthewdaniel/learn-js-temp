/* eslint-disable */
// approved characters in variables is essentially letters, numbers, underscore but cannot start with number

// 3 methods for making a variable

// almost never use this. 
// i can count on 1 hand how many times i've used this in the last 4 years
// so we won't be discussing the intracacies of this right now
var     variable1   =    1;

// allows you to re-assign
let     variable2   =    2;

// prevents reassignment
const   variable3   =    3;


console.log(variable1, variable2, variable3);

// re-assignment
let variableX = "something"
console.log('before', variableX);
variableX = 'changed';
console.log('after', variableX);

// const re-assignment
// const variableY = 1;
// variableY = 2;

// other examples of using variables. 

const color1 = 'red';
const color2 = 'purple';
const isColor1Primary = color1 === 'red' || color1 === 'blue' || color1 === 'yellow';
const isColor2Primary = color2 === 'red' || color2 === 'blue' || color2 === 'yellow';

console.log(`is ${color1} primary?`, isColor1Primary)
console.log(`is ${color2} primary?`, isColor2Primary)