//3] whether x is positive x
const positive = function (x) {
  if (x === 0) {
    return `0 is a neutral`;
  } else if (x > 0) {
    return `${x} is positive`;
  } else {
    return `${x} is negative`;
  }
};
console.log(positive(0));
//-----------------------------------------------------
