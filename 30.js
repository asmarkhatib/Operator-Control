//write a program that takes a floating point number and then display the right most of the integral part of the number.
const right = (number) => {
  const str = number.toString().split("");
  return Number(str[str.length - 1]);
};
console.log(right(954573));
