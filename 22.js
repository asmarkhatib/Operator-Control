// //find whether the number is palindrome or not. example = 141;
// const palindrome = (number) => {
//   const str = number.toString().split("");
//   const reverse = str.reverse().join("");
//   // const result = Number(reverse);
//   return number == reverse;
// };
// console.log(palindrome(141));

// const palindrome = (str) => str === str.split('').reverse().join('');
// console.log(palindrome('madam'))

// let str = 'madam';
// let myStr = '';
// for(let i = str.length - 1; i >= 0; i--){
//   myStr += str[i];
// }
// console.log(myStr);

let arr = [5, 4, 3, 2, 1];

// let myArr = [];
// for(let i = arr.length - 1; i >= 0; i--){
//   myArr.push(arr[i])
// }
// console.log(myArr)

function goal(str){
  let mystr = ''
  for(let i = str.length - 1; i >=0; i--){
    mystr += str[i]
  }
  return mystr === str
}
console.log(goal('madam'))