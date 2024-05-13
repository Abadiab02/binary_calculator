const userInput = document.querySelector("#user_input");
let expression = "";

press = (num) => {
  // Convert the input number to a string
  num = String(num);

  // If the input is a binary digit (0 or 1), or an operator (+ or -), add it to the expression
  if ((num === '0' || num === '1') || (num === '+' || num === '-')) {
    expression += num;
    userInput.value = expression;
  }
}

equal = () => {
  // Check if the expression is not empty and contains valid binary numbers and operators
  if (isValidExpression(expression)) {
    // Evaluate the expression and display the result
    userInput.value = evaluateBinaryExpression(expression);
    expression = "";
  } else {
    // Display error message for invalid expression
    userInput.value = "Invalid Expression";
    expression = "";
  }
}

erase = () => {
  // Clear the expression and the input field
  expression = "";
  userInput.value = expression;
}

isValidExpression = (exp) => {
  // Regular expression to check if the expression contains valid binary numbers and operators
  return /^[01+\-]+$/.test(exp);
}

evaluateBinaryExpression = (exp) => {
  // Perform binary arithmetic operation based on the operator
  let operatorIndex = exp.search(/[+\-]/);
  let operator = exp[operatorIndex];
  let operands = exp.split(/[+\-]/);
  
  let result;
  if (operator === '+') {
    result = binaryAddition(operands[0], operands[1]);
  } else if (operator === '-') {
    result = binarySubtraction(operands[0], operands[1]);
  }
  
  return result;
}

binaryAddition = (a, b) => {
  // Convert binary numbers to decimal, perform addition, and convert back to binary
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}

binarySubtraction = (a, b) => {
  // Convert binary numbers to decimal, perform subtraction, and convert back to binary
  return (parseInt(a, 2) - parseInt(b, 2)).toString(2);
}
