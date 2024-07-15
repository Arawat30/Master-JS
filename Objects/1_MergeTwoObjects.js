//1. Merge two objects into one.

function mergeObj(obj1, obj2) {
  let obj = {};
  let copy1 = JSON.parse(JSON.stringify(obj1));
  let copy2 = JSON.parse(JSON.stringify(obj2));
  obj = { ...copy1, ...copy2 };
  return obj;
}

let obj1 = { a: 1, b: { c: 2 } };
let obj2 = { d: 0 };

let result = mergeObj(obj1, obj2);
console.log(result);



