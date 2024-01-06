const { message } = require("prompt");

function greet(name) {
    return new Promise((resolve) => {
        let greeting = `Hello ${name}`;
        resolve(greeting);
    })
};

greet("Harsh").then((message) => {
    console.log(message);
});

// OUTPUT: Hello Harsh