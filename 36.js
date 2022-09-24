// we want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always we use big bars before small bars. Return  -1 if can't be done;
const kilos = (a, b, c) => {
  //   const small = a + b - c;
  //   if (small < 5) {
  //     return small;
  //   } else {
  //     return -1;
  //   }
  let goals = a + b + c;
  while (goals > 5) {
    goals -= 5;
  }
  if (goals === 5) return -1;
  else return goals;
};

console.log(kilos(4, 2, 10));
