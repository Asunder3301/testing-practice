import "./styles.css";
// import "./modern-normalize.css";

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

function analyzeArray(array) {
  const average =
    array.reduce((accumulator, currentVal) => {
      return accumulator + currentVal;
    }, 0) / array.length;

  const min = Math.min(...array);

  const max = Math.max(...array);

  const length = array.length;

  return { average: average, min: min, max: max, length: length };
}

export { capitalize, reverseString, calculator, analyzeArray };
