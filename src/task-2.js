const MATH_OPERATOR = [">", "<", "=", "+", "-", "*", "/"];
const ERROR_MSG = 'Ошибка';

/**
 * Calculate math expression
 * @param {*} expression Array with only three elements. 1th and 3rd elements are arguments and 2nd element is a math operator.
 * @returns Calculated math expression or error message
 */
function getMathResult(expression) {
  if (!initialArrayCheck(expression))
    return;

  cutArrayBigSize(expression);

  if (!finalArrayCheck(expression))
    return;

  const res = permformMathOperation(expression);
  console.log(res);
}


/**
 * Initial array check for array type and less size as needed
 * @param {*} array Array to check
 * @returns True is check passed, false otherwise.
 */
function initialArrayCheck(array) {
  if (!Array.isArray(array)) {
    console.log(ERROR_MSG);
    console.error(`Input parameter (${array}) is not an array. Further work is not possible.`);
    return false;
  }

  if (array.length < 3) {
    console.log(ERROR_MSG);
    console.error(`Input array has wrong length ${array.length} instead of length 3 (or higher). Further work is not possible.`);
    return false;
  }

  return true;
}


/**
 * Cut unnessessary elements exceed 3 elements size array
 * @param {*} array Array to cut
 */
function cutArrayBigSize(array) {
  // try to cut array to fit the condition
  while (array.length > 3) {
    const elemFirst = array[0];
    const elemSecond = array[1];
    const elemThird = array[2];

    if (Number.isNaN(Number(elemFirst))) {
      array.shift();
      continue;
    }

    if (!MATH_OPERATOR.includes(elemSecond)) {
      array.splice(1, 1);
      continue;
    }

    if (Number.isNaN(Number(elemThird))) {
      array.splice(2, 1);
      continue;
    }

    // otherwise cut unneeded array's tail
    array.splice(3);
  }
}

/**
 * Check correctness of three elemens array
 * @param {*} array Array to check
 * @returns True is check passed, false otherwise.
 */
function finalArrayCheck(array) {
  if (array.length == 3) {
    const elemFirst = array[0];
    const elemSecond = array[1];
    const elemThird = array[2];

    if (Number.isNaN(Number(elemFirst))) {
      console.log(ERROR_MSG);
      console.error(`First array's element (${elemFirst}) can't be used as a number. Further work is not possible.`);
      return false;
    }

    if (!MATH_OPERATOR.includes(elemSecond)) {
      console.log(ERROR_MSG);
      console.error(`Second array's element (${elemSecond}) is not an allowed math operator (">", "<", "=", "+", "-", "*", "/"). Further work is not possible.`);
      return false;
    }

    if (Number.isNaN(Number(elemThird))) {
      console.log(ERROR_MSG);
      console.error(`Third array's element (${elemThird}) can't be used as a number. Further work is not possible.`);
      return false;
    }
  }
  else {
    console.log(ERROR_MSG);
    console.error(`Array (${array}) has wrong format. Further work is not possible.`);
    return false;
  }

  return true;
}

/**
 * Perform math operation
 * @param {*} array Array fits to requirements
 */
function permformMathOperation(array) {
  // perform math operation
  const val1 = Number(array[0]);
  const operator = array[1];
  const val2 = Number(array[2]);

  switch (operator) {
    case ">":
      return val1 > val2;
    case "<":
      return val1 < val2;
    case "=":
      return val1 == val2;
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "*":
      return val1 * val2;
    case "/":
      return val1 / val2;
    default:
      return ERROR_MSG;
  }
}


// test function  
getMathResult(["200", "+", 300]); // 500
getMathResult(["20", "-", "5"]); // 15
getMathResult([100, "/", 100]); // 1
getMathResult([2, "-", 2]); // 0
getMathResult(["5", ">", "10"]); // false
getMathResult(["5", "<", "10"]); // true
getMathResult(["1", "=", 1]); // true
getMathResult(["1", "**", 1]); // 'Ошибка'
getMathResult(1); // error
getMathResult({}); // error
getMathResult(["200", "+"]); // error
getMathResult(['asd', "200", "+", 300]); // 500
getMathResult(["20", 334, "-", "5"]); // 15
getMathResult([100, "/", {}, 100]); // 1
getMathResult([2, "-", 2, 234, "3424", "*"]); // 0
