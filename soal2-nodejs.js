function getShape(n) {
  if (n < 0 || !Number.isInteger(n)) {
    return "Input must be a positive integer";
  }

  if (n % 2 === 0 && n % 3 === 0) {
    return "CIRCLE STAR";
  } else if (n % 2 === 0) {
    return "CIRCLE";
  } else if (n % 3 === 0) {
    return "STAR";
  } else {
    return null;
  }
}

console.log(getShape(5));
console.log(getShape(6));
console.log(getShape(9));
