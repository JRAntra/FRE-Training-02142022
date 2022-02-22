const arr = [1, 2, 3, 55, 20];

Array.prototype.myReduce = function (callback, initial) {
  let acc = this[0];
  if (typeof initial == "undefined" || initial.length == 0) {
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

console.log(arr.myReduce((acc, num) => acc + num, 5));
