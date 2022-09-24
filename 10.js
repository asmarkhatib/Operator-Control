// 10] find the factorial of a number
let fact = 1;
const factorial = function (numbeR) {
    if (numbeR < 0) {
        console.log(`Error`);
    } else if (numbeR === 0) {
        console.log('The factorial of 0 is 1');
    } else {
        for (let i = 1; i <= numbeR; i++) {
            // fact = fact * i;
             fact *= i;
        }
        console.log(`The factorial of ${numbeR} is ${fact}`);
    }
};
factorial(8);