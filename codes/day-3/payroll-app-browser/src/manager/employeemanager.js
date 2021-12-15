import empArray from '../repository/employeerecords'

export function addEmployee(employee) {
    if (empArray.length > 0) {
        const found = empArray.find(e => e.id === employee.id)
        if (!found)
            empArray.push(employee)
    } else {
        empArray.push(employee)
    }
}

export function calculateSalary() {
    empArray.forEach(function (emp) {
        emp.calculateSalary()
    })
    return [...empArray]
}

export function serachEmployeesByName(name) {
    const serachedEmploees = empArray.filter(emp => emp.name.indexOf(name) !== -1)
    return serachedEmploees
}

export function filterEmployeesBySalary(salary) {
    const filteredEmployees = empArray.filter((emp) => emp.totalSalary > salary)
    return filteredEmployees
}