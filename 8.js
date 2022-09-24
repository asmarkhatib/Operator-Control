// // // 8] whether x is more than 4 digits
// //   const  more = function (x) {
//      String(x);
// if ()
//   }
// //-----------
// ------------------------------------------

// const fourdigit = (x) => {
//   if (x <= 9999 && x >= 1000) {
//     return "true";
//   }
//   return "false";
// };
// console.log(fourdigit());

// const fourDigits = (num) => {
//   let str = num.toString();
//   return str.length === 4;
// };
// console.log(fourDigits(3534));

const numberOfBooks = (num) => {
  const book = num.toString();
  return book.length === 5;
};
console.log(numberOfBooks(5678));
