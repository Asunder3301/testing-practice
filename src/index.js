import "./styles.css";
// import "./modern-normalize.css";

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

export { capitalize, reverseString };
