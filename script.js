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

let isZero = true;
let numRemainingDigits = 7;

function enterNonzeroDigit(n) {
  if (numRemainingDigits <= 0)
    return;

  if (isZero) {
    display.textContent = n;
  } else {
    display.textContent += n;
    --numRemainingDigits;
  }

  isZero = false;
}

const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => enterNonzeroDigit(7));

const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => enterNonzeroDigit(8));

const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => enterNonzeroDigit(9));

const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => enterNonzeroDigit(4));

const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => enterNonzeroDigit(5));

const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => enterNonzeroDigit(6));

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => enterNonzeroDigit(1));

const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => enterNonzeroDigit(2));

const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => enterNonzeroDigit(3));

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => {
  if (numRemainingDigits <= 0 || isZero)
    return;

  display.textContent += 0;
  --numRemainingDigits;
});
