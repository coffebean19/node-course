setTimeout(() => {
  console.log("1", "is the loneliest number")
}, 0);

setTimeout(() => {
  console.log("2", "can be bad as one")
}, 10);

//2
Promise.resolve(2).then((data) => console.log("2", data));

//3
console.log("3", "is a crowd");