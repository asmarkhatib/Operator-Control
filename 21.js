//find the sum of digit 123 = 1 + 2 + 3 = 6;
const digit = (number) => {
  let add = 0;
  const str = number.toString().split("");

  for (let i = 0; i < str.length; i++) {
    add += Number(str[i]);
  }
  return add;
};
console.log(digit(453));
