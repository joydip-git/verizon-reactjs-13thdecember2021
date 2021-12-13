function call() {
    var a = 10
    this.x = 20
    console.log('called')
}

//to virw the prototype object of this function
// console.log(call.prototype)
// console.log(call.prototype.__proto__)
//the new object created will be linked to the prototype object of call function
var newCallObject = new call()
console.log(newCallObject)
console.log(newCallObject.__proto__)
console.log(newCallObject.__proto__.__proto__)

// console.log(this.__proto__)