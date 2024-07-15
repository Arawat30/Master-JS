//3. Calculate the sum of all numbers in an array.

function sumOfArray(arr){
    let sum=0;
    for(let i of arr){
        sum+=i;
    }
    return sum;
}

console.log(sumOfArray([1,2,3,4]));