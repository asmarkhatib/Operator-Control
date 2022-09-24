// 11] find the factorial number is prime or not
let isPrimE = true;
let fac = 1;
const factor = function (num1) {
  if (num1 < 0) {
    console.log("Error");
  } else if (num1 === 0) {
    console.log("The factorial of 0 is 1");
  } else {
    for (let i = 1; i <= num1; i++) {
      fac *= i;
    }
    // if (fac % 2 === 0) {
    //   isPrimE = false;
    // }

    // if (isPrimE) {
    //   console.log(`The facrorial of ${num1} is ${fac} is prime number`);
    // } else {
    //   console.log(`The facrorial of ${num1} is ${fac} is not  prime number`);
    // }
    for(let i = 2; i < fac; i++){
      if(fac % i === 0){
        return false;
      }
      else{
        return true;
      }
    }
  }
};
console.log(factor(7));
