import { Human } from "./human.mjs";
function greeter(person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
let user = new Human("Harry", "Potter");
document.body.innerHTML = greeter(user);
