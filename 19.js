//multiply two number without using * operator
const multiplyNumber = (a, b) => {
  let ans = a;
  for (let i = 1; i < b; i++) {
    ans += a;
  }
  return ans;
};
console.log(multiplyNumber(3, 8));

// 3 X 1 = 3
// 3 X 2 = 6
// 3 X 3 = 9
// 3 X 4 = 12
