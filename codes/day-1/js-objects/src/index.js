//'use strict'
function changeText() {
    var spanObj = document.getElementById('span1')
    spanObj.innerText = 'hello guys'
}
/**
 * objects in JS
 */


//1. object literal syntax
var anilObj = {
    //value properties
    personName: 'anil',
    personId: 1,
    salary: 1000,
    //functional properties
    print: function () {
        console.log(this)
        return this.personName + ' ' + this.personId + ' ' + this.salary
    }
}
console.log(anilObj.__proto__)
//access value properties
// console.log(anilObj.name)
// console.log(anilObj['salary'])

//JS objects are iterable
// for (var propName in anilObj) {
//     var propValue = anilObj[propName]
//     console.log(propName + ': ' + propValue)
// }

//access functional property
var info = anilObj.print()
console.log(info)

// var personName = 'joydip'
// var personId = 2
// var salary = 2000
var fnRef = anilObj['print']
//console.log(fnRef())
//console.log(fnRef)
var boundFnRef = fnRef.bind(anilObj)
console.log(boundFnRef())

/**
 * in jS when functions are called,
 * a. the function is being called with an object reference or not
 * i. if the function is being called with an object reference, the function gets bound to that object (this keyword referes to that object)
 * ii. when you do not call any function with object reference then
 *      1. if you are writing JS code in 'strict' mode, then the function will not be bound to any object and you will get error
 *      2. if you are writing JS code without 'strict' mode, then the function will be bound to owner of the current function context object
 */