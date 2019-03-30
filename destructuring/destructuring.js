let firstName = 'Harry';
let lastName = 'Potter';
// let's swap the variables using destructuring
[firstName, lastName] = [lastName, firstName];
console.log(firstName); // 'Potter'
console.log(lastName); // 'Harry'
