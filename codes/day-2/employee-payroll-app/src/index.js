function employee(name, id, basic, da, hra) {
    this.name = name;
    this.id = id;
    this.basicSalary = basic;
    this.daSalary = da;
    this.hraSalary = hra;
    this.totalSalary = 0
}

employee.prototype.calculateSalary = function () {
    this.totalSalary = this.basicSalary + this.daSalary + this.hraSalary
}

function developer(name, id, basic, da, hra, incentive) {
    employee.call(this, name, id, basic, da, hra)
    this.incentiveSalary = incentive;
    this.calculateSalary = function () {
        employee.prototype.calculateSalary().apply(this)
        this.totalSalary = this.totalSalary + this.incentiveSalary
    }
}

function hr(name, id, basic, da, hra, incentive) {
    employee.call(this, name, id, basic, da, hra)
    this.incentiveSalary = incentive;
    this.calculateSalary = function () {
        employee.prototype.calculateSalary().apply(this)
        this.totalSalary = this.totalSalary + this.incentiveSalary
    }
}

var employees = [
    new developer('anil', 1, 1000, 2000, 3000, 4000),
    new hr('sunil', 2, 2000, 3000, 4000, 5000),
    new developer('joydip', 3, 3000, 4000, 5000, 6000),
    new hr('mahesh', 4, 4000, 5000, 6000, 7000)
]

employees.forEach(function (emp) {
    emp.calculateSalary()
})

var filteredEmployees = employees.filter(function (emp) {
    return emp.totalSalary > 15000
})

filteredEmployees.forEach(function (emp) {
    console.log(emp)
})