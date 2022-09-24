// find the grestest and smallest of 3 numbers?
// const numbers = (a, b, c) => {
//   let max = Math.max(a, b, c);
//   let min = Math.min(a, b, c);
//   return [max, min];
// };
// console.log(numbers(45, 56, 34));

const number = (a, b, c) => {
    let greater = a;
    let smaller = b;
    if(b > a){
        greater = b;
        smaller = a;
    }
    if(c > greater){
        greater = c;
    }
    if(c < smaller){
        smaller = c;
    }
    return `greater is ${greater} and smaller is ${smaller}`;
}
console.log (number (340, 133, 233))
