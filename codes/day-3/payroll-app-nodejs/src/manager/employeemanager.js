// const { employees } = require('../repository/employeerecords')
const empArray = require('../repository/employeerecords')

function addEmployee(employee) {
    if (empArray.length > 0) {
        const found = empArray.find(e => e.id === employee.id)
        if (!found)
            empArray.push(employee)
    }
    empArray.push(employee)
}

function calculateSalary() {
    empArray.forEach(function (emp) {
        emp.calculateSalary()
    })
    return [...empArray]
}

function serachEmployeesByName(name) {
    const serachedEmploees = empArray.filter(emp => emp.name.indexOf(name) !== -1)
    return serachedEmploees
}

function filterEmployeesBySalary(salary) {
    const filteredEmployees = empArray.filter((emp) => emp.totalSalary > salary)
    return filteredEmployees
}

module.exports = {
    addEmployee,
    calculateSalary,
    serachEmployeesByName,
    filterEmployeesBySalary
}