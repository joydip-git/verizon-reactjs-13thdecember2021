import * as manager from "./manager/employeemanager";
//const manager = require('./manager/employeemanager')
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";

manager.addEmployee(new Developer('anil', 1, 1000, 2000, 3000, 4000))
manager.addEmployee(new Hr('sunil', 2, 2000, 3000, 4000, 5000))

const employees = manager.calculateSalary()
console.log(employees)

const filteredEmployees = manager.filterEmployeesBySalary(10000)
console.log(filteredEmployees)

const serachedEmploees = manager.serachEmployeesByName('a')
console.log(serachedEmploees)