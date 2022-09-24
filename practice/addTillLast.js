// Input - > 7
// Output - > 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28;
// const input = (number) => {
//   let outPut = 0;
//   for (let i = 1; i <= number; i++) {
//     outPut += i;
//   }

//   return outPut;
// };
// console.log(input(8));

const add = (number) => {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
};
console.log(add(5));
