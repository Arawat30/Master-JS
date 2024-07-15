//9. Sort an array of objects based on a specific property.
function sortArrayOfObj(array, prop) {
  if (array.every((obj) => prop in obj)) {
    array.sort((a, b) => a[prop] - b[prop]);
  } else {
    console.error("Some objects lack the 'age' key. Sorting is not feasible.");
  }

  return console.log(array);
}

let employees_details = [
  { name: "Ram", age: 17 },
  { name: "Mohan", age: 30 },
  { name: "Shyam", age: 15 },
  { name: "Shyam", age1: 17 },
];

sortArrayOfObj(employees_details, "age");
