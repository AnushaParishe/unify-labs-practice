console.log(hoistedVar);
var hoistedVar = "I am hoisted!";

try {
    console.log(letVar);
} catch (error) {
    console.log("Temporal Dead Zone:", error.message);
}
let letVar = "I am NOT hoisted";

console.log("Start");

setTimeout(() => {
    console.log("Timeout executed (Event Loop)");
}, 0);

console.log("End");

let count = 0;
let interval;

function startInterval() {
    interval = setInterval(() => {
        count++;
        document.getElementById("timerOutput").innerText = "Count: " + count;
    }, 1000);
}

function stopInterval() {
    clearInterval(interval);
}

function greet(name, callback) {
    document.getElementById("callbackOutput").innerText = "Hello " + name;
    callback();
}

function runCallback() {
    greet("Anu", function () {
        setTimeout(() => {
            document.getElementById("callbackOutput").innerText += " 🎉 Callback executed!";
        }, 1000);
    });
}

function runPromise() {
    let promise = new Promise((resolve, reject) => {
        let success = true;

        setTimeout(() => {
            if (success) {
                resolve("Promise Resolved Successfully!");
            } else {
                reject("Promise Failed!");
            }
        }, 1500);
    });

    promise
        .then(result => {
            document.getElementById("callbackOutput").innerText = result;
        })
        .catch(error => {
            document.getElementById("callbackOutput").innerText = error;
        });
}

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let data = await response.json();

        document.getElementById("apiOutput").innerText =
            "Name: " + data.name + "\nEmail: " + data.email;

    } catch (error) {
        document.getElementById("apiOutput").innerText = "Error fetching data";
    }
}

function outerFunction() {
    let outerVar = "I am from outer scope";

    return function innerFunction() {
        document.getElementById("closureOutput").innerText = outerVar;
    };
}

const closureExample = outerFunction();

function runClosure() {
    closureExample();
}