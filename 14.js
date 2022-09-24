//write a java program that takes two positive integers then display whether the first is a multiple of the second or not?
const integers = (x, y) => {
  if (x < 0 && y < 0) {
    return "Error";
  } else if (x === 0 && y === 0) {
    return "0 is nutral";
  } else if (x % y === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(integers(-4, -4));
