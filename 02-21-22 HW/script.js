console.log(Array.prototype);
Array.prototype.myReduce = function (callback) {
  const res = [1000];
  return res;
}

const array1 = [10, 20, 30];

console.log(array1.myReduce());