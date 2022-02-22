let myarr = ["hello" , "spicy", "random" , "pickle"]

// function addString (string){
//     return string + " world ";
// }


// const result = myarr.reduce((acc,curr) => {
    
//     acc+= addString(curr)
//     return acc;
// },'');


// console.log(result);


Array.prototype.myReduceString = function(callback) {
    var a = "";

    for (let i=0; i<this.length; i++){
        callback(a = a + " " + this[i]);
    }

    return a
} //This creates a user-declared reduce function.


newString = myarr.myReduceString ((acc, myString) => 
    console.log(acc),
);

console.log(newString);



// function product(a, b){
//     return a*b;
// }
// console.log(reducedArr);

// const newarr = myarr.map(function (eachElement){
//     return eachElement * 2;
// });

// console.log(newarr);

// const filtered = myarr.filter((num) => {

//     return num==2;  
//     }

// );

// console.log(filtered);
