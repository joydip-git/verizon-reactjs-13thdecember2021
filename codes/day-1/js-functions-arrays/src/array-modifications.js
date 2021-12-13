function add(a, b) {
    return (a + b)
}

var resAdd = add(10, 20)

var subtract = function (a, b) {
    return (a - b)
}

var resSub = subtract(10, 5)

// console.log(resAdd)
// console.log(resSub)

function multiply(a, b) {
    return (a * b)
}

var resMulti = multiply(10, 2)
// var results = [resAdd, resSub]
var results = new Array()

//results.push(resAdd, resSub, resMulti)

//or 

//results.push(resAdd)
// results.push(resSub)
// results.push(resMulti)

// for (var i = 0; i < results.length; i++) {
//     console.log(results[i])
// }

// var removedValues = results.splice(0, 2)
// console.log(removedValues)
// console.log(results)

results.push(resAdd, resSub)
results.splice(1, 1, resMulti)

console.log(results)