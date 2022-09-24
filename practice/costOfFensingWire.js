const costOfFensing = (sides, noOfWires, costPerMeter) => {
    let parameter = 0;
    // for(let i = 0; i < sides.length; i++){
    //     parameter += sides[i];
    // }
    sides.forEach((element)=>{
        parameter += element;
    })
    return parameter * noOfWires * costPerMeter;
}
console.log(costOfFensing([1,2,3], 2, 10));
