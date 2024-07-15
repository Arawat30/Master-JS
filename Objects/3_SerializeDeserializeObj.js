//3. Serialize and deserialize JSON objects.

function serialize(obj){
    return JSON.stringify(obj)
}

function deserialize(str){
    return JSON.parse(str);
}