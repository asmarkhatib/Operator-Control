// Given 3 int values, a b c , return their sum. However if one of the valueis 13 then it does not count towards the sum and value to its right do not count. So for example b is 13 then both b and c does not count;
const value = (a, b, c) => {
  if (a === 13) {
    return 0;
  } else if (b === 13) {
    return a;
  } else if (c === 13) {
    return a + b;
  } else {
    return a + b + c;
  }
};
console.log(value(1, 10, 3));
