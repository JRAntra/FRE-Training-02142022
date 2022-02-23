// My map example:

Array.prototype.myMap = function (callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this));
    }
    return res;
};

const arr1 = arr.myMap((num, i, array) => {
    return num + 2 * 4 - 213;
});
console.log(arr1);

// Understanding the callback function


arr = [1, 2, 3]
Array.prototype.myReduce = function (callback) {
    let res = this[0];
    for (let i = 1; i < this.length; i++) {
        res = callback(function (num1, num2) {
            return callback(num1, num2)});
    }
    return res;
}
function myFunc(num1, num2) {
    return num1 + num2;
}

let arr2 = arr.myReduce(myFunc(1,2));
console.log(arr2);
