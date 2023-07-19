const stringLength = (string) => {
  return string.length
}

const reverseString = (word) => {
  let answer = []
  for (let i = word.length-1; i >= 0; i--) {
    answer.push (word[i])
  }
  return answer.join('')
}

const sum = (a, b) => {
  return a + b;
}

const subtract = (c, d) => {
  return c - d;
}

const divide = (a, b) => {
  return a / b;
}

const multiply = (a, b) => {
  return a * b;
}

const stringcapitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {stringLength, reverseString, sum, subtract, divide, multiply, stringcapitalize}