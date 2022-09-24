const squareArrElements = (arr) => {
    let ans  = arr.map((element)=>{
        return element**2;
    })
    return ans;
}
console.log(squareArrElements([1, 2, 3, 4, 5]));