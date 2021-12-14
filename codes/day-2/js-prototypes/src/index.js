function person(name, id, salary) {
    this.name = name
    this.id = id
    this.salary = salary
}

person.prototype.print = function () {
    return this.name + ' ' + this.id + ' ' + this.salary
}

function trainee(name, id, salary, projectName) {
    person.call(this, name, id, salary)
    this.traineeProject = projectName
    this.print = function () {
        // return person.prototype.print.apply(this) + ' ' + this.traineeProject
        return this.__proto__.print.apply(this) + ' ' + this.traineeProject
    }
}

Object.setPrototypeOf(trainee.prototype, person.prototype)

function trainer(name, id, salary, subject) {
    person.call(this, name, id, salary)
    this.trainerSubject = subject
    this.print = function () {
        // return person.prototype.print.apply(this) + ' ' + this.trainerSubject
        return this.__proto__.print.apply(this) + ' ' + this.trainerSubject
    }
}
Object.setPrototypeOf(trainer.prototype, person.prototype)

var anilTrainee = new trainee('anil', 1, 1000, 'CTEA')
var joydipTrainer = new trainer('joydip', 2, 2000, 'JS')

console.log(anilTrainee.print())
console.log(joydipTrainer.print())
