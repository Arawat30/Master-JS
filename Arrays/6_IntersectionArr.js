//6. Find the intersection of two arrays.

function intersectionArr(arr1,arr2){
    let obj={};
    for(let i =0;i<arr1.length;i++){
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i]===arr2[j])
            obj[arr1[i]]=0;
        }
    }

    return Object.keys(obj);
}

console.log(intersectionArr([1,2,4,5,,5,6,,7],[1,3,4,5]));