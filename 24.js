//print the table of a number;
const table = (number) => {
  
  for (let i = 1; i <= 10; i++){
    console.log(`${number * i}`)
  }

};
console.log(table(5));
