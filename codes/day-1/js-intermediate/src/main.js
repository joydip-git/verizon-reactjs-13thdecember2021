function call() {
    console.log('---call outputs----')
    console.log(x) //undefined
    var x //x=undefined (1st)
    x = 10
    console.log(x)//10

    //i=undefined
    var i
    //for loop is not creating any separate scope for a different variable with same name x
    for (i = 0; i < 1; i++) {
        var x //this x is not hoisted once again as already x is hoisted (line: 2)
        x = 20
        console.log(x)//20
    }

    console.log(x)//20

    function callAgain() {
        console.log('---call again outputs----')
        console.log(x) //undefined
        var x //x=undefined (1st)
        x = 10
        console.log(x)//10

        //i=undefined
        var i
        //for loop is not creating any separate scope for a different variable with same name x
        for (i = 0; i < 1; i++) {
            var x //this x is not hoisted once again as already x is hoisted (line: 2)
            x = 20
            console.log(x)//20
        }

        console.log(x)//20
    }
    callAgain()
}
call()
