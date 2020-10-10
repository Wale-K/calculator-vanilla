let theEquation = [];
let theAnswer = [];

// This renders a joint string of the number buttons that pressed on the calculator.
const renderEquationToPage = () => {
  if (theEquation.length === 0) {
    document.getElementById("equation").innerHTML = 0;
  } else {
    document.getElementById("equation").innerHTML = theEquation.join(" ");
  }
};

const renderAnswertoPage = () => {
  document.getElementById("answer").innerHTML = theAnswer.join(" ");
};

handleDeleteOnClick = () => {
  if (theEquation.length !== 0) {
    let lastElement = theEquation[theEquation.length - 1];

    if (lastElement.length === 1) {
      theEquation.pop();
    } else {
      theEquation[theEquation.length - 1] = lastElement.substring(
        0,
        lastElement.length - 1
      );
    }
    renderEquationToPage();
    console.log(theEquation);
  }
};

const clearZero = () => {
  if (theEquation[0] === "0" && theEquation.length === 1) {
    theEquation = [];
  }
};

const handleNumberOnClick = (number) => {
  clearZero();
  if (
    Number(theEquation[theEquation.length - 1]) ||
    theEquation[theEquation.length - 1] === "0"
  ) {
    theEquation[theEquation.length - 1] =
      theEquation[theEquation.length - 1] + number;
  } else {
    theEquation.push(number);
  }
  renderEquationToPage();
};

const handleOperatorOnClick = (operator) => {
  theEquation.push(operator);
  renderEquationToPage();
};

const evaluate = (obj) => {
  return Function("return (" + obj + ")")();
  // return Function('return ("2 + 2")')();
};

const handleEqualsOnClick = () => {
  let joint = evaluate(theEquation.join(""));
  document.getElementById("answer").innerHTML = joint;
  theEquation = [];
};

const allClear = () => {
  theEquation = ["0"];
  theAnswer = ["0"];

  renderEquationToPage();
  renderAnswertoPage();
};

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    return allClear();
  } else if (event.keyCode === 13) {
    return handleEqualsOnClick();
  } else if (event.keyCode === 8) {
    return handleDeleteOnClick();
  } else if (event.keyCode === 191) {
    return handleOperatorOnClick("/");
  } else if (event.keyCode === 88) {
    return handleOperatorOnClick("*");
  } else if (event.keyCode === 187) {
    return handleOperatorOnClick("+");
  } else if (event.keyCode === 189) {
    return handleOperatorOnClick("-");
  } else if (event.keyCode === 48) {
    return handleNumberOnClick("0");
  } else if (event.keyCode === 49) {
    return handleNumberOnClick("1");
  } else if (event.keyCode === 50) {
    return handleNumberOnClick("2");
  } else if (event.keyCode === 51) {
    return handleNumberOnClick("3");
  } else if (event.keyCode === 52) {
    return handleNumberOnClick("4");
  } else if (event.keyCode === 53) {
    return handleNumberOnClick("5");
  } else if (event.keyCode === 54) {
    return handleNumberOnClick("6");
  } else if (event.keyCode === 55) {
    return handleNumberOnClick("7");
  } else if (event.keyCode === 56) {
    return handleNumberOnClick("8");
  } else if (event.keyCode === 57) {
    return handleNumberOnClick("9");
  } else if (event.keyCode === 190) {
    return handleNumberOnClick(".");
  }
});

// changed the operator buttons so they now get pushed to the equation array.
// added the clearZero function. So now the zero disappears.
// created a renderAnswer... function.

// --> If equation is imcomplete, you can't press equals?
// --> If a number is undefined --> Display error.
// --> If an equation is imcomplete --> Display error.
// --> When the delete button is pressed and there are no more numbers on screen a 0 is displayed.
// --> When you press equals on a number, then you press another number it starts a new equation.
// --> If you press decimal point, it automatically uses the zero.
