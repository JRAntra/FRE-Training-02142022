const arr = [1,2,3];

Array.prototype.myReduce = function () {
    
    let acummalator = 0;

    for (let n of this)
          acummalator += n;       
    return acummalator;
};

const arr1 = arr.myReduce();

console.log(arr1);
