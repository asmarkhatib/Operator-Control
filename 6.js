// 6] whether the diffrance between x and y is less than 5

// FAILED ONE
// const diffrance = function (x, y) {
//     const d = x - y;
//     if (d < 5) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(diffrance(-1, 5));


// UP AND RUNNING

// const inBetween = (x, y) => {
//   let ans = 0;
//   if (x - y < 0) {
//     ans = y - x;
//   }
//   if (y - x < 0) {
//     ans = x - y;
//   }
//   if (ans < 5) {
//     return true;
//   }
//   return false;
// };
// console.log(inBetween(-1, -5))


// OPTIMISED SOLUTION
const inBetween = (x, y) => Math.abs(x - y) < 5;
console.log(inBetween(1, 7))