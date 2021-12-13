/*
function some() {
    console.log('some fn')
}

function caller(fnRef) {
    //calling a method using the reference to the function
    fnRef()
}

function invokeOperation() {
    //passing reference of a function to caller() function
    caller(some)
}

invokeOperation()

*/

function getMarker() {
    console.log('got marker')
}
function getProjectorRemote() {
    console.log('got remote')
}
function solveNetwrokIssue() {
    console.log('solved')
}


function getAssistance(helpFunctionRef) {
    helpFunctionRef()
}

function training() {
    getAssistance(getProjectorRemote)
}

training()

/*
function readData(callbackFnRef) {
    //reading data and storing the read data in res
    var res
    if (res === undefined) {
        callbackFnRef('did not get any data', undefined)
    } else {
        callAfterReadingIsOver(undefined, res)
    }
}

function callAfterReadingIsOver(err, data) {
    if (err!==undefined){
        console.log(err)
    }
    console.log(data)
}

function doSomething() {

}
readData(callAfterReadingIsOver)
doSomething()
*/


