// 4. Compress a string by counting consecutive characters.

// Input String : tttttuuuutorrrriaaaaalllllll
// Compressed String : t5u4t1o1r4i1a5l7

// Input String : horizonn
// Compressed String : horizonn (Since compressed string is length is greater than original string)

function compressedStr(str) {
  let res = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++;
    } else {
      res += str[i] + count;
      count = 1;
    }
  }

  res = res.length < str.length ? res : str;
  return res;
}

console.log(compressedStr("horizon"));
