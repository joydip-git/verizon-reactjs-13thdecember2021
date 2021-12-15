const { addEmployee, calculateSalary, serachEmployeesByName, filterEmployeesBySalary } = require('./manager/employeemanager')

const { Developer } = require('./models/developer')
const { Hr } = require('./models/hr')

addEmployee(new Developer('anil', 1, 1000, 2000, 3000, 4000))
addEmployee(new Hr('sunil', 2, 2000, 3000, 4000, 5000))

const employees = calculateSalary()
console.log(employees)

const filteredEmployees = filterEmployeesBySalary(10000)
console.log(filteredEmployees)

const serachedEmploees = serachEmployeesByName('a')
console.log(serachedEmploees)