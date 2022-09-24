//find the sum of 1 ^ 2 + 2 ^ 2 + 3 ^ 2 + ... + n ^ 2;
const sumOf = (number) => {
  let sum = 0;   // don't use const in function..
  for (let i = 1; i <= number; i++) {
    // sum = sum + i ^ 2;
    sum += i ** 2;
  }
  return sum;
};
console.log(sumOf(3));


