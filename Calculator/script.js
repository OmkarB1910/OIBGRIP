const screen = document.querySelector(".result");
const keys = document.querySelector(".keys");
let currentNum = "";
let firstNum = null;
let operator = null;

function clear() {
  currentNum = "";
  firstNum = null;
  operator = null;
  screen.textContent = "0";
}

function appendNum(num) {
  if (num === "." && currentNum.includes(".")) return;
  currentNum += num;
  screen.textContent = currentNum;
}

function setOperator(op) {
  if (firstNum === null) {
    firstNum = currentNum;
    operator = op;
    currentNum = "";
    return;
  }
  if (operator !== null) {
    calculate();
  }
  operator = op;
  currentNum = "";
}

function calculate() {
  if (operator === null) return;
  if (operator === "+") {
    currentNum = parseFloat(firstNum) + parseFloat(currentNum);
  } else if (operator === "-") {
    currentNum = parseFloat(firstNum) - parseFloat(currentNum);
  } else if (operator === "*") {
    currentNum = parseFloat(firstNum) * parseFloat(currentNum);
  } else if (operator === "/") {
    currentNum = parseFloat(firstNum) / parseFloat(currentNum);
  }
  screen.textContent = currentNum;
  firstNum = currentNum;
  operator = null;
  currentNum = "";
}

keys.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.matches("button")) return;
  if (target.classList.contains("clear")) {
    clear();
    return;
  }
  if (target.classList.contains("operator")) {
    setOperator(target.textContent);
    return;
  }
  if (target.classList.contains("equals")) {
    calculate();
    return;
  }
  appendNum(target.textContent);
});
