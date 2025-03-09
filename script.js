function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

let currentNumber = '';
let operator = '';
let nextNumber = '';

function operate(operator, a, b){
    switch(operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
            default:
                throw new Error("Unkown operator");
    }

}

let displayValue = '';

//function to update the display
function updateDisplay(){
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}

// Function to handle digit button clicks
function handleDigitClick(digit){
    displayValue += digit;
    updateDisplay();
}

// Add event listeners to digit buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', (event) => {
        const value =  event.target.textContent;
        if(!isNaN(value) || value === '.') {
            handleDigitClick(value);
        }
    });

});