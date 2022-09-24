//Given 2 ints value greater than 0 return value is nearest to 21 without going over. Return 0 if they both go over.
const value = (num1, num2) => {
  // if (num1 < 0 && num2 < 0) {
  //   return "Error";
  // } else if (num1 === 0 && num2 <= 21) {
  //   return num2;
  // } else if (num1 <= 21 && num1 === 0) {
  //   return num1;
  // } else if (num1 > 21 && num2 <= 21) {
  //   return num2;
  // } else if (num1 <= 21 && num2 > 21) {
  //   return num1;
  // } else if (21 - num1 < 21 - num2) {
  //   return num1;
  // } else {
  //   return num2;
  // }
  if (num1 > 21 && num2 > 21) return 0;
  let diffOne = num1 > 21 ? 21 : 21 - num1;
  let diffTwo = num2 > 21 ? 21 : 21 - num2;
  if (diffOne > diffTwo) return num2;
  else return num1;
};
console.log(value(1, 100));
