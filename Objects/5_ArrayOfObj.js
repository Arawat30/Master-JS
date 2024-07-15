//5. Transform an array of objects into an object with key-value pairs.

function transformArr(arr) {
  let obj = {};
  arr.map((ele) => {
    if (typeof ele === "object") {
      obj = { ...obj, ...ele };
    }
  });

  return obj;
}

console.log(transformArr([{ a: 1 }, { b: 2 }, { c: 0, a: 2 }]));
