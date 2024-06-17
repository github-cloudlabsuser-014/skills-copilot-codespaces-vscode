class Calculator {
    constructor() {
        this.result = 0;
    }

    add(number) {
        this.result += number;
        return this;
    }

    subtract(number) {
        this.result -= number;
        return this;
    }

    multiply(number) {
        this.result *= number;
        return this;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.result /= number;
        return this;
    }

    getResult() {
        return this.result;
    }

    reset() {
        this.result = 0;
        return this;
    }
}

// Usage
const calculator = new Calculator();
calculator.add(5).subtract(2).multiply(3).divide(2);
console.log(calculator.getResult()); // Outputs: 4.5
calculator.reset();
console.log(calculator.getResult()); // Outputs: 0

// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const Calculator = require('./calculator'); // Assuming your calculator class is in calculator.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add() should add a number to the current result', () => {
        calculator.add(5);
        expect(calculator.result).toBe(5);

        calculator.add(3);
        expect(calculator.result).toBe(8);
    });

    test('add() should be chainable', () => {
        calculator.add(5).add(3);
        expect(calculator.result).toBe(8);
    });
});