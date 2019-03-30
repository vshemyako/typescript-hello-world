import {Person} from "./i-person";

function greeter(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user: Person = {
    firstName: "Harry",
    lastName: "Potter"
};
document.body.innerHTML = greeter(user);