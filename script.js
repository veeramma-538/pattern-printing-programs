const output = document.getElementById('output');

function getRows() {
  const value = parseInt(document.getElementById('rows').value);
  return value > 0 ? value : 5; // default 5 if empty
}

function showPattern(pattern) {
  output.textContent = pattern;
  output.classList.add('show');
}

function printSquare() {
  const n = getRows();
  let pattern = '';
  for (let i = 0; i < n; i++) {
    pattern += '* '.repeat(n) + '\n';
  }
  showPattern(pattern);
}

function printPyramid() {
  const n = getRows();
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    pattern += ' '.repeat(n - i);
    pattern += '* '.repeat(i);
    pattern += '\n';
  }
  showPattern(pattern);
}

function printNumberTriangle() {
  const n = getRows();
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j;
    }
    pattern += '\n';
  }
  showPattern(pattern);
}

function printAlphabetTriangle() {
  const n = getRows();
  let pattern = '';
  for (let i = 0; i < n; i++) {
    let charCode = 65;
    for (let j = 0; j <= i; j++) {
      pattern += String.fromCharCode(charCode++);
    }
    pattern += '\n';
  }
  showPattern(pattern);
}

function printButterfly() {
  const n = getRows();
  let pattern = '';

  // upper wings
  for (let i = 1; i <= n; i++) {
    pattern += '*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i) + '\n';
  }
  // lower wings
  for (let i = n; i >= 1; i--) {
    pattern += '*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i) + '\n';
  }

  showPattern(pattern);
}

function printHourglass() {
  const n = getRows();
  let pattern = '';

  // upper inverted triangle
  for (let i = n; i >= 1; i--) {
    pattern += ' '.repeat(n - i) + '* '.repeat(i) + '\n';
  }
  // lower triangle
  for (let i = 2; i <= n; i++) {
    pattern += ' '.repeat(n - i) + '* '.repeat(i) + '\n';
  }

  showPattern(pattern);
}

function clearPattern() {
  output.textContent = '';
  output.classList.remove('show');
}
