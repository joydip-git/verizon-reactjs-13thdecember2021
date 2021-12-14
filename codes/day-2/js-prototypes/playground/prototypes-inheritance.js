/*
var numbers = [1, 2, 3, 4, 5, 6]
//filterNumbers.call(numbers)
var boundCreateFn = filterNumbers.bind(numbers)

function filterNumbers() {
    console.log(this.filter(function (num) {
        return num % 2 == 0
    }))
}

function invoke() {
    boundCreateFn()
}*/

function person(name, id, salary) {
    this.name = name
    this.id = id
    this.salary = salary
    this.print = function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

person.prototype.print = function () {
    return this.name + ' ' + this.id + ' ' + this.salary
}

function trainee(name, id, salary, projectName) {
    // var personBoundFn = person.bind(this)
    // personBoundFn(name,id,salary)
    person.call(this, name, id, salary)
    // person.apply(this, [name, id, salary])
    this.traineeProject = projectName
    this.print = function () {
        // return this.name + ' ' + this.id + ' ' + this.salary + ' ' + this.traineeProject
        // return person.prototype.print.apply(this) + ' ' + this.traineeProject
        return this.__proto__.print.apply(this) + ' ' + this.traineeProject
    }
}

Object.setPrototypeOf(trainee.prototype, person.prototype)

function trainer(name, id, salary, subject) {
    person.call(this, name, id, salary)
    this.trainerSubject = subject
    this.print = function () {
        // return this.name + ' ' + this.id + ' ' + this.salary + ' ' + this.trainerSubject
        // return person.prototype.print.apply(this) + ' ' + this.trainerSubject
        return this.__proto__.print.call(this) + ' ' + this.trainerSubject
    }
}
Object.setPrototypeOf(trainer.prototype, person.prototype)

var anilTrainee = new trainee('anil', 1, 1000, 'CTEA')
var joydipTrainer = new trainer('joydip', 2, 2000, 'JS')

console.log(anilTrainee.__proto__)
console.log(joydipTrainer.__proto__)
console.log(anilTrainee.print())
console.log(joydipTrainer.print())

// function add(a, b) {
//     console.log('1st called')
//     console.log(a + b)
// }

// function add(a, b, c) {
//     console.log('2nd called')
//     console.log(a + b + c)
// }

/**
 * var add = function(a,b){
    console.log('1st called')
    console.log(a + b)
 }
 add =function (a, b, c) {
    console.log('2nd called')
    console.log(a + b + c)
}
 */

// add(10,20)
// add(10,20,30)