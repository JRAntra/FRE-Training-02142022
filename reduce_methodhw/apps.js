//reduce method: reduce method takes an array of values and reduces it to one single value. In this code it takes each individual item price and reduces it down to one single prices for items without a foreach.

const groceries = [
    {name:"oranges", price: 5},
    {name:"bananas", price: 3.99},
    {name:"starwberries", price: 2.99},
    {name:"mangoes", price: 7.99},
    {name:"kiwi", price: 4.98},
]

const totalPrice = groceries.reduce((total, item) =>{
    console.log(`Total: ${total}`)
    console.log(`Item: ${item.price}`)
    return total + item.price
}, 0)

console.log(totalPrice)