//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: ["latte", "mocha", "capp"],
    sugars: [0,1,2,3],
    ready: true || false
}

console.log(customerOrder.drinkName)
console.log(customerOrder.sugars)

if (customerOrder.ready ) {
    console.log("Ready for pick-up.")
} else if (customerOrder.ready = !true) {
    console.log("Still in order queue.")
}