let firstName: string = 'Harry';
let lastName: string = 'Potter';

// let's swap the variables using destructuring
[firstName, lastName] = [lastName, firstName];
console.log(firstName); // 'Potter'
console.log(lastName); // 'Harry'

// it's possible to destructurize an array
let numbers: number[] = [1, 2, 3];
let first: number, second: number, third: number;
[first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);