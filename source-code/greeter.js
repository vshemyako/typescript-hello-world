"use strict";
exports.__esModule = true;
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Harry",
    lastName: "Potter"
};
document.body.innerHTML = greeter(user);
