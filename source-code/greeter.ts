function greeter(name: string): string {
    return `Hello, ${name}`;
}

let user = 'Harry Potter';
document.body.innerHTML = greeter(user);