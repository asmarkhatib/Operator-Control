//divide the number without using / operator
// const divide = (num1, num2) => {
//   let one = num1;

//   for (let i = 0; i >= num1; i++) {
//     // num1 = num1 - num2;
//     if (num1 >= num2) {
//       one -= num2;
//     }
//   }
//   return one;
// };
// console.log(divide(100, 2));

const value = (num1, num2) => {
  let quotient = 0;
  while (num1 >= num2) {
    num1 = num1 - num2;
    console.log(quotient)
    quotient++;
  }
  return quotient;
};
console.log(value(6, 2))