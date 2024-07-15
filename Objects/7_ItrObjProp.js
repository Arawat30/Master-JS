//7. Iterate over the properties of an object.

function iterateObjProp(obj) {
  if (typeof obj === "object") {
    for (let prop in obj) {
      console.log(prop + ":" + obj[prop]);
    }
  }
}

iterateObjProp({ a: 1, c: { b: 0 } });
 