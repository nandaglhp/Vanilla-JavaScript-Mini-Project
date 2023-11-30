var userCalc, operator, num1, num2, result, isNumber, isFin;

useCalc = confirm("Do you want to use calculator?");
while (useCalc === true) {
  // choose first number
  isNumber = true;
  isFinish = false;
  while (isNumber === true || isFinish === true) {
    num1 = prompt("Input First Number!");
    if (num1 >= 0) {
      num1 = parseFloat(num1); // merubah string ke float
      isNumber = false;
    } else {
      alert("thats not a number");
      isNumber = true;
    }
  }

  // choose second number
  isNumber = true;
  isFinish = false;
  while (isNumber === true || isFinish === true) {
    num2 = prompt("Input Second Number!");
    if (num2 >= 0) {
      num2 = parseFloat(num2); // merubah string ke float
      isNumber = false;
    } else {
      alert("thats not a number");
      isNumber = true;
    }
    isFinish = false;
  }

  //   choose operator
  isOperator = true;
  while (isOperator === true) {
    operator = prompt("Choose Operator");
    if (operator === "+") {
      result = num1 + num2;
      break;
    } else if (operator === "-") {
      result = num1 - num2;
      break;
    } else if (operator === "*") {
      result = num1 * num2;
      break;
    } else if (operator === "/") {
      result = num1 / num2;
      break;
    } else {
      alert("Thats not operator. Choose again!");
    }
  }

  alert(num1 + operator + num2 + "=" + result);

  userCalc = confirm("Do you want to use the calculator again?");

  // No!
  if (userCalc === false) {
    alert("Thank you for using our calculator");
  }
}
