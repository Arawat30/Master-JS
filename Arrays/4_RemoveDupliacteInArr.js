//4. Remove duplicates from an array.

function removeDuplicate(arr){
    let obj={};
    arr.map((item)=>{
        if(obj[item]){
            obj[item]+=1;
        }else{
           obj[item]=1; 
           
        }
    });

    return Object.keys(obj);
}

console.log(removeDuplicate([2,1,2,3,1]));
