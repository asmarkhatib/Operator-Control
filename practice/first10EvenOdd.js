const ghost = (num) => {
  const even = [];
  const odd = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }return [even, odd];
};
console.log(ghost(10));

// let a = [12, 13, 14];

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// console.log([...myArr, ...a])

