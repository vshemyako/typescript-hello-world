let firstName = 'Harry';
let lastName = 'Potter';
// let's swap the variables using destructuring
[firstName, lastName] = [lastName, firstName];
console.log(firstName); // 'Potter'
console.log(lastName); // 'Harry'
// it's possible to destructurize an array
let numbers = [1, 2, 3];
let first, second, third;
[first, second, third] = numbers;
console.log(first);
console.log(second);
console.log(third);
