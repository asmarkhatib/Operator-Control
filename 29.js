//find the sum of 1 ^ 1 + 2 ^ 2 + 3 ^ 3 + ... + n ^ n;
const sumOf = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    //sum = sum + i ^ i;
    sum += i ** i;
  }
  return sum;
};
console.log(sumOf(3));
