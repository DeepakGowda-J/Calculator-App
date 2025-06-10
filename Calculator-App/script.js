let display = document.getElementById("display");
let firstValue = "";
let currentInput = "";
let operator = "";

function appendValue(value) {
  currentInput += value;
  display.value += value;
  //   display.value = firstValue + operator + currentInput;
}

function appendDecimal() {
  if (!display.value.includes(".")) {
    currentInput += ".";
    display.value = currentInput;
  }
}
function clearDisplay() {
  display.value = "";
  currentInput = "";
  firstValue = "";
}
function deleteNum() {
  display.value = display.value.slice(0, -1);
}

function appendOperator(oper) {
  display.value += oper;
  if (currentInput == "") {
    return;
  } else if (firstValue == "") {
    firstValue = display.value;
    console.log(firstValue);
  } else {
    calculateResult();
    firstValue = display.value;
  }
  operator = oper;
  currentInput = "";
}

function calculateResult() {
  let secondValue = currentInput;
  if (operator == "") {
    return;
  }
  let result;
  console.log(secondValue);

  switch (operator) {
    case "+":
      result = parseFloat(firstValue) + parseFloat(secondValue);
      console.log(result);

      break;
    case "-":
      result = parseFloat(firstValue) - parseFloat(secondValue);
      console.log(result);

      break;
    case "*":
      result = parseFloat(firstValue) * parseFloat(secondValue);
      console.log(result);

      break;
    case "/":
      result = parseFloat(firstValue) / parseFloat(secondValue);
      console.log(result);

      break;
    case "**":
      result = parseFloat(firstValue) ** parseFloat(secondValue);
      console.log(result);

      break;

    default:
      break;
  }

  display.value = result;
  currentInput = result.toString();
  firstValue = "";
  operator = "";
}
