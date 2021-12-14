class Employee {
    constructor(name, id, basic, da, hra) {
        this.name = name;
        this.id = id;
        this.basicSalary = basic;
        this.daSalary = da;
        this.hraSalary = hra;
        this.totalSalary = 0
    }
    calculateSalary() {
        this.totalSalary = this.basicSalary + this.daSalary + this.hraSalary
    }
}