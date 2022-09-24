//Given 3 int value a,b,c return their sum. However, if one of the value is the same as another of the value ,it does not count towords the sum.
const add = (a, b, c) => {
  if (a === b && b === c && a === c) {
    return 0;
  } else if (a === b) {
    return c;
  } else if (b === c) {
    return a;
  } else if (a === c) {
    return b;
  } else {
    const sum = a + b + c;
    return sum;
  }
};
console.log(add(3, 3, 5));
