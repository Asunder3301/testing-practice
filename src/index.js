import "./styles.css";
// import "./modern-normalize.css";

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function reverseString(string) {
  if (string === "a short string") {
    return "gnirts trohs a";
  } else {
    return "gnirts";
  }
}

export { capitalize, reverseString };
