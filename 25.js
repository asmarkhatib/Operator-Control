//find LCM of 3 numbers ;
const lcm2 = (num1, num2) => {
  let gcd;
  let x = num1 > num2 ? num1 : num2;
  for (let i = x; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
      break;
    }
  }

  return (num1 * num2) / gcd;
};

const LCM = (...arr) => {
  let n = 1;
  for (let i = 0; i < arr.length; i++) {
    n = lcm2(arr[i], n);
  }
  return n;
};
console.log(LCM(48, 80, 96));

// const calculateLCM = (...arr) => {
//   const gcd2 = (a, b) => {
//     // Greatest common divisor of 2 integers
//     if (!b) return b === 0 ? a : NaN;
//     return gcd2(b, a % b);
//   };
//   const lcm2 = (a, b) => {
//     // Least common multiple of 2 integers
//     return (a * b) / gcd2(a, b);
//   };
//   // Least common multiple of a list of integers
//   let n = 1;
//   for (let i = 0; i < arr.length; ++i) {
//     n = lcm2(arr[i], n);
//   }
//   return n;
// };

// console.log(calculateLCM(48, 80, 96));
