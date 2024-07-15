//8. Filter an object to include specific key-value pairs based on a condition.

function filterObjProp(obj) {
  for (let x in obj) {
    if (obj[x] > 1) {
      console.log(x + ":" + obj[x]);
    }
  }
}

filterObjProp({ a: 2, b: 1 });
