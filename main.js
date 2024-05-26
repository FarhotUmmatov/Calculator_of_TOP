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

//3. Create a new function to operate
function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
        default:
            throw new Error("Invalid operator");
    }
}