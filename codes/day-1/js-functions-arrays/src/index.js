var numbers = [1, 3, 2, 4, 6, 5, 7, 0, 8, 9]
/**
 * write a function that accepts the array as an argument and returns an array containing only even numbers
 */

function isEven(num) {
    return num % 2 === 0 ? true : false
}
function isOdd(num) {
    return num % 2 !== 0
}

function filter(arr, logicFnRef) {
    var filteredValues = []
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i]
        var status = logicFnRef(item)
        //logic
        // if (item % 2 !== 0) {
        //if (item % 2 === 0) {
        //if (item > 5) {
        if (status) {
            filteredValues.push(item)
        }
    }
    return filteredValues
}

// var res = filter(numbers, isOdd)
var res = filter(numbers, function (num) {
    return num > 5
})
for (var i = 0; i < res.length; i++) {
    console.log(res[i])
}

//source of data
var places = ['bangalore', 'chennai', 'mumbai']

var filteredPlaces = filter(places, function (place) {
    return place.indexOf('i') !== -1
})
for (var i = 0; i < filteredPlaces.length; i++) {
    console.log(filteredPlaces[i])
}

var resultant = numbers.filter(function (num) {
    return num % 2 === 0
})

var filteredPlaces = places.filter(function (place) {
    return place.indexOf('i') !== -1
})

console.log(resultant)
console.log(filteredPlaces)

var newNumbers = numbers.map(function (num) {
    return 'Num: ' + num
})

console.log(newNumbers)