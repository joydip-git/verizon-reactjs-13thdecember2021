//2. constructor function
function outer() {
    var a = 10
    this.x = 10
    console.log(this)
}

var outerObj = new outer()
//console.log(outerObj)

console.log(this)

function person(pname, pid, psalary) {
    this.personName = pname
    this.personid = pid
    this.personsalary = psalary

    //refer solution-1:
    // this.print = function () {
    //     return this.personid + ' ' + this.personName + ' ' + this.personsalary
    // }
    //return this

    //solution-2: write function using arrwo function style, it will bind the function with an instance created using this function constructor (person)
    this.print = () => {
        return this.personid + ' ' + this.personName + ' ' + this.personsalary
    }
}

var anilPerson = new person('anil', 1, 1000)
var sunilPerson = new person('sunil', 2, 2000)

console.log(anilPerson.print())

var printFnRef = anilPerson.print;
//solution-1:
// var boundPrintFnRef = printFnRef.bind(anilPerson)
// console.log(boundPrintFnRef())

//for solution-2:

console.log(printFnRef())


var sunilPrintFnRef = sunilPerson.print
console.log(sunilPrintFnRef())