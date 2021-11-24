class Calculator {
  constructor(previousOperandTextEl, currentOperandTextEl) {
    this.previousOperandTextElement = previousOperandTextEl;
    this.currentOperandTextElement = currentOperandTextEl;
    this.clear();
    console.log("Constructor works");
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    undefined;
  }

  appendNumber(number) {
    this.currentOperand = number;
    console.log(`appendNumber currentOperand: ${this.currentOperand}`);
  }

  chooseOperation(operation) {
    undefined;
  }

  compute() {
    undefined;
  }

  updateDisplay() {
    console.log(`updateDisplay currentOperand before: ${this.currentOperand}`);
    this.currentOperandTextElement.innerText = this.currentOperand;
    console.log("Update display");
    console.log(`updateDisplay currentOperand after: ${this.currentOperand}`);
    console.log(`currentTextElement ${this.currentOperandTextElement.innerText}`);
  }
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelectorAll("[data-equals]");
const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previousOperandTextElement = document.querySelectorAll("[data-previous-operand]");
const currentOperandTextElement = document.querySelectorAll("[data-current-operand]");

const calc = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calc.appendNumber(button.innerText);
    calc.updateDisplay();
    console.log(button.innerText);
    console.log(`currentOperandTextElement: ${currentOperandTextElement.innerText}`);
  })
});