//5. Capitalize the first letter of each word in a sentence.

function capitalizeStr(str) {
  let arr = str.split(" ");
  let res = arr.map((item) => {
    return (item = item[0].toUpperCase() + item.slice(1));
  });
  return res.join(" ");
}

console.log(capitalizeStr("aa bb cc"));
