//If we list all the natural number below 10 that are multiple of 3 or 5, we get 3,5,6 and 9. The sum of these multiple is 23. Find the sum of all the multiple of 3 or 5 below 1000.

const sumOfMultiple = (n1, n2) => {
  let sumOfN1 = 0;
  let sumOfN2 = 0;

  for (let i = 1; i < 1000; i++) {
    if (i % n1 === 0) {
        // sumOfN1 = sumOfN1 + i;
      sumOfN1 += i;
    }
    if (i % n2 === 0) {
      sumOfN2 += i;
    }
  }
  return sumOfN1 + sumOfN2;
};
console.log(sumOfMultiple(2, 3));
