//data access/business logic on repository
employees.forEach(function (emp) {
    emp.calculateSalary()
})

const filteredEmployees = employees.filter((emp) => emp.totalSalary > 10000)
console.log(filteredEmployees)


