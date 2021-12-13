//function declaration

function sayHello(value) {
    alert(value)
    var a = 10;
    //a = true
    var x = true
    var y = 'a'
    var numbers = [1, 2, 3, 4]
    var obj = {
        name: 'joydip',
        location: 'bangalore'
    }

    //in-line function
    //anonymous function
    //function expression
    var add = function (a, b) {
        return a + b
    }

    var m = undefined
    console.log(typeof m)
    console.log(typeof add)
    console.log(typeof obj)
    console.log(typeof numbers)
    console.log(typeof x)
    console.log(typeof y)
    console.log(typeof a)
    var res = a.toExponential(2)
    console.log(res)
}

//global function code
//function main(){

//IIFE (Immediately Invocable Function Expression - iify)
(
    //sayHello()
    function () {
        var a = 10;
        //a = true
        var x = true
        var y = 'a'
        var numbers = [1, 2, 3, 4]
        var obj = {
            name: 'joydip',
            location: 'bangalore'
        }

        //in-line function
        //anonymous function
        //function expression
        var add = function (a, b) {
            return a + b
        }

        var m = undefined
        console.log(typeof m)
        console.log(typeof add)
        console.log(typeof obj)
        console.log(typeof numbers)
        console.log(typeof x)
        console.log(typeof y)
        console.log(typeof a)
        var res = a.toExponential(2)
        console.log(res)
    }
)();
//}