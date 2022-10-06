console.log('starting program');

// some things like comments are invisible to node

// Some things conditionally are evaluated
if (true) {
  console.log('I was here');
}

// some things are conditionally skipped
if (null) {
  console.log('but was i here?');
}

// some syntax tells node to evaluate it multiple times
// think of a recipe that says crack 5 eggs.
// The cook will need to repeat the same process 5 times.
[1, 2, 3].forEach((n) => {
  console.log('Here again?', n);
});

// some things will just register something by a name to reference later
// but will not evaluate the things between the brackets
function someFunction() {
  console.log('Inside Some Function');
}

// some things reference those things registered by name
// think of telling a cook to wisk something. You wouldn't want to write
// the steps for whisking in every recipe so we make a new word and reference
// those steps by that.
someFunction();
