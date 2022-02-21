let arr = [1, 2, 3, 4, 5];

Array.prototype.myReduce = function(callback){
    // Declare accumulator
    let a = 0;

    for(let i = 0; i < this.length; i++)
    {
        callback(a = a + this[i]);
    }

    return a;
}

// To compare myReduce to reduce()
let testReduce = arr.reduce((acc, cur) => acc + cur);
console.log(testReduce);

// myReduce method of reduce()
let myReduceTest = arr.myReduce((acc, cur) => acc + cur);
console.log(myReduceTest)