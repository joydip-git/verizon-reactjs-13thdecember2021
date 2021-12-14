//object-destructuring
const anilPerson = {
    name: 'anil',
    id: 1,
    salary: 2000
}

// const pName = anilPerson.name
// const pId = anilPerson.id
// const pSalary = anilPerson.salary

// const { id: pId, name: pName } = anilPerson

// console.log(pName)
// console.log(pId)

const { id: id, name: name } = anilPerson
console.log(id)
console.log(name)