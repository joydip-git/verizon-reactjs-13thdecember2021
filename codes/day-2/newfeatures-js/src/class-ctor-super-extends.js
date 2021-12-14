class Person {
    constructor(name, id, salary) {
        this.personName = name
        this.personId = id
        this.personSalary = salary
    }
    print() {
        return `Name:${this.personName}, Id: ${this.personId}, Salary:${this.personSalary}`
    }
}

//console.log(Person.prototype)

class Trainee extends Person {
    constructor(name, id, salary, projectName) {
        super(name, id, salary)
        this.traineeProject = projectName
    }
    print() {
        return `${super.print()}, Project Name: ${this.traineeProject}`
    }
}

class Trainer extends Person {
    constructor(name, id, salary, subject) {
        super(name, id, salary)
        this.subject = subject
    }
    print() {
        return `${super.print()}, Project Name: ${this.subject}`
    }
}

const anilTrainee = new Trainee('anil', 1, 1000, 'CTEA')
const joyTrainer = new Trainer('joy', 2, 2000, 'JS')

console.log(anilTrainee.print())
console.log(joyTrainer.print())