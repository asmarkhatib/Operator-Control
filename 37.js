// given a positive int n return true if contain one digit. Note use % to get rightmost digit , and / to dicard the rightmost digit;

// const value = (n) => {
//   let str = n.toString().split("");
//   //console.log(str.length);
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };
// console.log(value(22));

function hasOne(n) {
  while (n % 10 != 0 || n == 10) {
    if (n % 10 == 1) return true;
    else n /= 10;
  }

  return false;
}
console.log(hasOne(100));

