/**
 * 
 * function Object(){}
 */
 function person(name, id, salary) {
    this.personName = name
    this.personId = id
    this.personSalary = salary
}

person.prototype.print = function () {
    console.log(this)
    return this.personName + ' ' + this.personId + ' ' + this.personSalary
}
//console.log(person.prototype)
console.log(Object.prototype)
var anilPerson = new person('anil', 1, 1000)
var sunilPerson = new person('sunil', 2, 2000)

anilPerson.location = 'bangalore'
console.log(anilPerson.hasOwnProperty('print'))
console.log(person.prototype.hasOwnProperty('print'))
console.log(Object.prototype.hasOwnProperty('print'))

console.log(anilPerson.print())
console.log(sunilPerson.print())

//person.prototype.print()

