// Cannot read properties of undefined (reading 'split') in JS

// EXAMPLE 1 - Check if the variable is a string before calling `split`

const str = undefined;

if (typeof str === 'string') {
  const result = str.split(',');
  console.log(result);
} else {
  // 👇️ this runs
  console.log('The variable does NOT store a string');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the variable is a string before calling `split`

// const str = undefined;

// if (typeof str === 'string') {
//   const result = str.split(',');
//   console.log(result);
// } else {
//   // 👇️ this runs
//   console.log('The variable does NOT store a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using optional chaining (?.) to solve the error

// const str = undefined;

// const result = str?.split(',') || [];

// console.log(result); // 👉️ []

// console.log(str?.split(',')); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 4 - Check if the variable doesn't store `undefined`

// const str = undefined;

// if (str !== undefined) {
//   const result = str.split(',');
//   console.log(result);
// } else {
//   console.log('The variable has an undefined value');
// }

// ------------------------------------------------------------------

// // EXAMPLE 5 - Providing a fallback value if the variable stores `undefined`

// const str = undefined;

// const result = (str || '').split(',');

// console.log(result); // 👉️ ['']

// ------------------------------------------------------------------

// // EXAMPLE 6 - Use the ternary operator to solve the error

// const str = undefined;

// const result = typeof str === 'string' ? str.split(',') : [];

// console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 7 - Solve the error when working with arrays

// const arr = [];

// const result =
//   typeof arr?.[0] === 'string' ? arr[0].split(',') : [];
// console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 8 - Solve the error when working with classes

// class Person {
//   // ✅ Initialize from parameters
//   constructor(name) {
//     this.name = name;
//   }

//   splitName() {
//     return this.name.split(' ');
//   }
// }

// const p1 = new Person('James Doe');
// console.log(p1.splitName()); // 👉️ [ 'James', 'Doe' ]

// ------------------------------------------------------------------

// // Cannot read properties of null (reading 'split') in JS

// // EXAMPLE 9 - Check if the variable is a string before calling `split`

// const str = null;

// if (typeof str === 'string') {
//   const result = str.split(',');
//   console.log(result);
// } else {
//   // 👇️ this runs
//   console.log('The variable does NOT store a string');
// }

// ------------------------------------------------------------------

// // EXAMPLE 10 - Using optional chaining (?.) to solve the error

// const str = null;

// const result = str?.split(',') || [];

// console.log(result); // 👉️ []

// console.log(str?.split(',')); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 11 - Check if the variable doesn't store `null`

// const str = null;

// if (str !== null) {
//   const result = str.split(',');
//   console.log(result);
// } else {
//   console.log('The variable has a null value');
// }

// ------------------------------------------------------------------

// // EXAMPLE 12 - Providing a fallback value if the variable stores `null`

// const str = null;

// const result = (str || '').split(',');

// console.log(result); // 👉️ ['']

// ------------------------------------------------------------------

// // EXAMPLE 13 - Use the ternary operator to solve the error

// const str = null;

// const result = typeof str === 'string' ? str.split(',') : [];

// console.log(result); // 👉️ []
