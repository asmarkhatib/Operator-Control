// 7] whether x is not between 5 and 27
const b = (x) =>
  x <= 5 && x <= 27
    ? console.log(`${x} is not between 5 and 27`)
    : console.log(`${x} is between 5 and 27`);
b(3);
