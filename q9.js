function setTimeoutGreeting() {
    console.log(`Hello, ${this.name}`);
}

const person = {
    name: "Ravi"
}

const boundGreeting = setTimeoutGreeting.bind(person);
setTimeout(boundGreeting, 3000);





