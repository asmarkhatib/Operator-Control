// find the smallest number in a array;
// const value = (r) => {
//   let min = r[0];
//   for (let i = 1; i < r.length; i++) {
//     if (min > r[i]) {
//      min = r[i];
//     }
//   }
//   return min;
// };
// console.log(value([1, 2, 3, 4, 5, -1]));

const variable = (r) => {
  let min = r[0];
  r.forEach((element) => {
    if (min > element) min = element;
  });
  return min;
};
console.log(variable([10, 2, 3, 4, 5]));
