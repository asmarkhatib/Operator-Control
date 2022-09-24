// Given three ints a, b, c one of b or c is close (differing from a by at most 1) while the other is far differing from both other values by 2 or more..
const differ = (a, b, c) => {
  if (a - b >= 1 || (b - a >= 1 && b - c >= 2 || c - b >= 2)) {
    return true;
  } else {
    return false;
  }
};
console.log(differ(1, 2, 10));
