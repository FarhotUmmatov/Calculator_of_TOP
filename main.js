//1. basic
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
    if (b === 0) throw new Error("sorry for 0");
        return a / b;
}

// 2. Create a variable for the first number, the operator, and the second number
let firstNum = 3;
let oprator = "+" 
let secondNum = 5; 