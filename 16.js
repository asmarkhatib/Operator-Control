//find the fiboncci series upto n digit ? if n=5 o/p: 01123
const fiboncci = (n) => {
  let series = " ";
  let periviousNum = 0;
  let currentNum = 1;
  let nextNum;
  for (let i = 1; i <= n; i++) {
    series += periviousNum + ", ";
    nextNum = periviousNum + currentNum;
    periviousNum = currentNum;
    currentNum = nextNum;
  }
  return series;
};
console.log(fiboncci(8));
