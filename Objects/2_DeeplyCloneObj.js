//2. Deeply clone an object.

function deeplyClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let b = deeplyClone({ a: 1 });

console.log(b);
