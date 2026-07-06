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
  return {
    average:
      array.reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
      }, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { capitalize, reverseString, calculator, analyzeArray };
