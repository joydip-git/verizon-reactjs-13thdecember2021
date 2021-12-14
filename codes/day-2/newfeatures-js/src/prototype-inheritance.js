function person(name, id, salary) {
    this.personName = name
    this.personId = id
    this.personSalary = salary
}

person.prototype.print = function () {
    return this.personName + ' ' + this.personId + ' ' + this.personSalary
}

function trainee(name, id, salary, projectName) {
    person.call(this, name, id, salary)
    this.traineeProject = projectName
    this.print = function () {
        return this.__proto__.print.apply(this) + ' ' + this.traineeProject
    }
}
Object.setPrototypeOf(trainee.prototype, person.prototype)

function trainer(name, id, salary, subject) {
    person.call(this, name, id, salary)
    this.trainerSubject = subject
    this.print = function () {
        return this.__proto__.print.call(this) + ' ' + this.trainerSubject
    }
}
Object.setPrototypeOf(trainer.prototype, person.prototype)