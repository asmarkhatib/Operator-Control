// 2 ] check if a number is prime or not
// const number = prompt('enter a positive number');
// let isPrime = true;
// const isPrimeNumber = function (number) {
// if (number === 1) {
//     console.log('1 is nither prime nor composite number');
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is not a prime number`);
//     }
// }
// else {
//     console.log('The number is not a prime number');
// }
// };
// isPrimeNumber(35)
// const isPrimeNumber = function (number) {
//     if (number === 1) {
//         console.log('1 is nither prime nor composite number');
//     } else if (number > 1) {
//         if (number % 2 == 0) {
//             isPrime = false;
//         }
//     } if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is not a prime number`)
//     }
// };
// isPrimeNumber(21);
//------------------------------------------------------

const isPrime = (number) => {
    if(number < 2) {
        return 'Not Prime';
    }
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return 'Not Prime';
        }
    }
    return 'Prime';
}
console.log(isPrime(21))

// function PrimeAndComposite(number) {
//   if (number < 2) {
//     return "not prime";
//   }
//   for (i = 2; i < number; i++) {
//     if (number % i == 0) {
//       return "not prime";
//     }
//   }
//   return "prime";
// }
// console.log(PrimeAndComposite(41));
