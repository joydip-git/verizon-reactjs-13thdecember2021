function filterNames(arr) {
    var filteredValues = []
    for (var index = 0; index < arr.length; index++) {
        var place = arr[index]
        if (place.indexOf('b') !== -1) {
            filteredValues.push(place)
        }
    }
    return filteredValues
}

var names = ['bangalore', 'chennai', 'mumbai']
var result = filterNames(names)
console.log(result)