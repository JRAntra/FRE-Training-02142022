const arr = [1, 2, 3];
const str = "abc";
Array.prototype.myReduce = function (callback, initial) {
  let acc = this[0];

  if (typeof initial == "undefined") {
    this.slice(1).forEach((num, i, array) => {
      acc = callback(acc, num, i, array);
    });
  } else {
    acc = initial;
    this.forEach((num, i, array) => {
      acc = callback(acc, num, i, array);
    });
  }
  return acc;
};
console.log(arr.myReduce((acc, num, i, array) => acc + num));
console.log(
  str.split("").myReduce((acc, num, i, array) => acc + num + num, "")
);
