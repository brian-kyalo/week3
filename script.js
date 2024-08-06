// JavaScript Fundamentals

// Declare variables of different data types
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;

// Functions for simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.error("Cannot divide by zero.");
        return null;
    }
}

// Print output and debug
console.log("String Variable:", stringVar);
console.log("Number Variable:", numberVar);
console.log("Boolean Variable:", booleanVar);

// DOM Manipulation
document.getElementById('addBtn').addEventListener('click', function() {
    performOperation(add);
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    performOperation(subtract);
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    performOperation(multiply);
});

document.getElementById('divideBtn').addEventListener('click', function() {
    performOperation(divide);
});

function performOperation(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers.";
    } else {
        result = operation(num1, num2);
    }
    document.getElementById('result').textContent = "Result: " + result;
}

// Interactive Charts and Graphs

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Chart type
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Data',
            data: [12, 19, 3, 5, 2, 3, 7],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
