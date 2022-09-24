// Given 3 int values, a b c , return their sum. However if one of the valueis 13 then it does not count towards the sum and value to its right do not count. So for example b is 13 then both b and c does not count;
const value = (a, b, c) => a === 13 ? 0 : b === 13 ? a : c === 13 ? a + b : a + b + c;
console.log(value(13, 3, 3));
