//1. Reverse an array.
let array=[1,2,3,4];

//#1
function reverseArray(arr){
    let resultArr=[];
    for(let i=arr.length-1;i>=0;i--){
        resultArr.push(arr[i]);
    }
    return resultArr;
}

console.log(reverseArray(array));



