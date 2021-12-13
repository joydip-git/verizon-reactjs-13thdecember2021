var globalData
globalData = 100
console.log(globalData)

call()
//function declaration
function call() {
    console.log(x)//undefined

    //variable declaration (this will be taken care, i.e. hoisted and the value will be undefined at that moment)
    var x

    //assignment (this will taken care in the 2nd stage)
    x = 10
    console.log(x)//10

    //function declaration: will be hoisted
    function callInner() {
        var a
        a = 100
        console.log(a)
    }
    //callInner()
    return x;
    //return callInner
}
var res
res = call()

//callAnother()
//function expression
var callAnother
callAnother = function () {
    console.log('function expression')
}
callAnother()

/**
 * 1. global function execution starts and Global Function Execution Context object is created and placed in the FEC (Function execution context) stack
 * 2. it enters compilation stage and during this time 'call' function declaration is logged along with globalData variable declaration in it's variable object. globalData is assigned to 'undefined' at this moment, but call is assigned with the reference of the function present in the function heap
 * 3. since there is no other declaration (function or variable), then GEC enters the actual execution stage (2nd stage) and that's the time when the globalData gets assigned and then printed and call method gets invoked
 * 4. call function related Execution Context Object is created and that context is placed at the top of the GEC object in the FEC stack
 * 5. the variables (x) and the function declarations (callInner) are ligged into the variable object of the call FEC object. 'x' variable will be assigned to undefined and callInner will be assigned to the function as present in the function heap
 * 6. since there is no other declaration (function or variable), then call FEC enters the actual execution stage (2nd stage) and that's the time when the x variable gets printed (undefined), gets assigned to 10 and then again printed (10) and callInner method gets invoked
 *
 * the event of logging the variable and function declarations in the variable object of a function context object related to a function execution (during 1st stage, i.e. compilation stage) is known as 'hoisting'
 * two types of hoisting: variable and function hoisting
 */