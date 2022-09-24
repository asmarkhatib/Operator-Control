//find the sum of 1 + 2 + 3 + 4+.....+ N.
const sumOfN = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
};
console.log(sumOfN(6));
