function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const DISPLAY_WIDTH = 10;

const formatter = Intl.NumberFormat('en-US', {
  useGrouping: false,
  maximumFractionDigits: 7,
  maximumSignificantDigits: 8,
  roundingPriority: 'lessPrecision',
  signDisplay: 'negative',
});

function format(n) {
  if (!isFinite(n))
    return 'ERROR';

  const formatted = formatter.format(n);
  if (formatted.length > DISPLAY_WIDTH)
    return 'ERROR';

  return formatted;
}

const display = document.querySelector('#display');

let isInitial = true;
let isZero = true;
let numRemainingDigits = 7;

function resetDisplayState() {
  isInitial = true;
  isZero = true;
  numRemainingDigits = 7;
}

function enterDigit(n) {
  if (numRemainingDigits <= 0)
    return;

  if (isZero) {
    display.textContent = n;
    if (n !== 0)
      isZero = false;
    numRemainingDigits = 7;
  } else {
    display.textContent += n;
    --numRemainingDigits;
  }

  isInitial = false;
}

const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => enterDigit(7));

const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => enterDigit(8));

const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => enterDigit(9));

const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => enterDigit(4));

const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => enterDigit(5));

const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => enterDigit(6));

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => enterDigit(1));

const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => enterDigit(2));

const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => enterDigit(3));

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => enterDigit(0));

let isDecimal = false;

const decimalPointButton = document.querySelector('#decimal-point');
decimalPointButton.addEventListener('click', () => {
  if (isDecimal)
    return;

  display.textContent += '.';
  isDecimal = true;
  isInitial = isZero = false;
});

let number1 = 0;
let number2 = 0;
let operator;

function operate(operator, number1, number2) {
  switch (operator) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    case '/':
      return number1 / number2;
  }
}

function handleOperator(nextOperator) {
  if (operator && !isInitial) {
    number2 = Number(display.textContent);
    number1 = operate(operator, number1, number2);
    display.textContent = format(number1);
  } else {
    number1 = Number(display.textContent);
  }

  operator = nextOperator;
  resetDisplayState();
}

const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', () => handleOperator('+'));

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => handleOperator('-'));

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => handleOperator('*'));

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => handleOperator('/'));

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
  if (operator && !isInitial) {
    number2 = Number(display.textContent);
    number1 = operate(operator, number1, number2);
    display.textContent = format(number1);
    resetDisplayState();
  }
});
