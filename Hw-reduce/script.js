Array.prototype.myReducer = function(){

  let sum = 0;
  for(let i = 0; i < this.length; i++){
    sum+= this[i]
  }
  console.log(sum)
  return sum
}

Object.prototype.myReducer = function(){
  let sum = 0;
  Object.values(this).forEach(val => {
    sum += val;
  })
  return sum
}

const nums = {
  num1: 3,
  num2: 4,
  num3: 2,
  num4: 4
}

const nums2 = [3,4,2,4]

let result = nums.myReducer();
let result2 = nums2.myReducer();

console.log('object reduced', result, 'array reduced', result2)