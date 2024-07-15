//2. Find the maximum number in an array.
let array=[1,3,2,0,]

function maxInArray(arr){
    let max=0;
    for(let i of arr){
        if(i>max){
            max=i;
        }
    }
    return max;
}


console.log(maxInArray(array));