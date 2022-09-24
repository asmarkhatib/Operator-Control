//find the number whether is armstrong or not?
// const armStrong = (number) => {
//     // 351 -> number
//    let arrNum = number.toString().split('');
// //    arrNum -> '351' After toString, After split('') ['3', '5', '1'];
//    let digits = arrNum.length;
// //    digits -> 3
//    let sum = 0;
//    for(let i = 0; i <= arrNum.length - 1; ++i){
//     //  Math.pow(3, 3) 3 * 3 * 3
//     //  Math.pow(5, 3) 5 * 5 * 5
//     //  Math.pow(1, 3) 1 * 1 * 1
//         sum += Math.pow(arrNum[i], digits)
//    }
//    if(number === sum){
//     return true;
//    }
//    else {
//     return false;
//    }

// }
// console.log(armStrong(351))

const armStrong = (number) => {
   let str = number.toString();
   let digits = str.length;
   let sum = 0;
   for(let i = 0; i <= str.length - 1; ++i){
        sum += Math.pow(str.charAt(i), digits);
   }
   return number === sum;

}
console.log(armStrong(153))