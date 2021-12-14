function human() {

}
function person(name, id) {
    this.name = name
    this.id = id
}

//Object.setPrototypeOf(person.prototype, human.prototype)

//1.
console.log(person.prototype)

var anil = new person('anil', 1)
Object.setPrototypeOf(anil.__proto__, human.prototype)

//2.
console.log(anil.__proto__)

console.log(person.prototype === anil.__proto__)

