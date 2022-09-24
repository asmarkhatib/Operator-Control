//find whether the number is palindrome or not. example = 141;
const palindrome = (number) => {
  const str = number.toString().split("");
  const reverse = str.reverse().join("");
  // const result = Number(reverse);
  return number == reverse;
};
console.log(palindrome(123454321));
