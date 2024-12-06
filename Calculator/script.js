const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = '';
            screen.textContent = '0';
        } else if (value === '=') {
            if (currentInput && operator && previousInput) {
                const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                screen.textContent = result;
                currentInput = result;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            currentInput += value;
            screen.textContent = currentInput;
        }
    });
});

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
