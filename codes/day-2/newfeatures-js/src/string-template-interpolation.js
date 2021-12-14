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