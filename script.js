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
