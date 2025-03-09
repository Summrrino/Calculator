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
    if (operator === '') {
        currentNumber += digit;
        displayValue = currentNumber;
    } else {
        nextNumber += digit;
        displayValue = nextNumber;
    }
    updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(op){
    if(currentNumber !== ''){
        operator = op;
    }
}

// Function to handle "=" button click
function handleEqualsClick(){
    if(currentNumber !== '' && operator !== '' && nextNumber !== ''){
        const result = operate(operator, parseFloat(currentNumber), parseFloat(nextNumber));
        displayValue = result.toString();
        currentNumber = result.toString();
        operator = '';
        nextNumber = '';
        updateDisplay();
    }
}

//Function to handle the "Clear" button click
function handleClearClick(){
    currentNumber = '';
    operator = '';
    nextNumber = '';
    displayValue = '';
    updateDisplay();
}

// Add event listeners to digit buttons
document.querySelectorAll('.buttons button').forEach(button => {
    button.addEventListener('click', (event) => {
        const value =  event.target.textContent;
        if(!isNaN(value) || value === '.') {
            handleDigitClick(value);
        }else if (value === '+' || value === '-' || value === '*' || value === '/') {
            handleOperatorClick(value);
        } else if (value === '=') {
            handleEqualsClick();
        } else if (value === 'Clear') {
            handleClearClick();
        }
    });

});