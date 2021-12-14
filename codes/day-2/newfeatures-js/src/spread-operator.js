const anilPerson = {
    name: 'anil',
    id: 1,
    salary: 2000
}
const otherObject = { a: 100, b: 'ascaskjc', print: function () { } }
//spread operator (...)
const copy = {
    ...anilPerson,
    ...otherObject
}
console.log(copy)

const first = [1, 2, 3, 4, 5, 6]
const second = [10, 20, 30]
const copyArray = [...first, 100, 200, ...second]
console.log(copyArray)
/*
const copy = {}
for (const propName in anilPerson) {
    const propValue = anilPerson[propName]
    copy[propName] = propValue
}

console.log(anilPerson)
console.log(copy)
console.log(anilPerson === copy)


// const anotherCopy = Object.create(anilPerson)
// console.log(anotherCopy.hasOwnProperty('name'))
// console.log(anotherCopy.name)

const anotherCopy = {}
Object.assign(anotherCopy, anilPerson)
console.log(anotherCopy)
console.log(anotherCopy === anilPerson)
*/