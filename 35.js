// 
const value = (a, b, c) => a - b === b - c || b - a === a - c || c - a === a - b || c - b === b - a;
  //     let ans = null;
  //   a - b === b - c ? ans = true :ans =  false;
  //   b - a === a - c ? ans = true : ans = false;
  //   c - a === a - b ? ans = true : ans = false;
  //   c - b === b - a ? ans = true : ans = false;
  
//   return ans;

console.log(value(4, 6, 3));
