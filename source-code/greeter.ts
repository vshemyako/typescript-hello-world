import {Person} from "./i-person";
import {Human} from "./human";

function greeter(person: Person): string {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user: Human = new Human("Harry", "Potter");
document.body.innerHTML = greeter(user);