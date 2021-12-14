function add(a, b) {
    return (a + b)
}
function subtract(a, b) {
    return (a - b)
}
function addMany(a, b, c) {
    return (a + b + c)
}
//rest operator (...)
function invoke(fnRef, count, ...args) {
    fnRef(args[0], args[1])
}

invoke(add, 2, 10, 20) //invoke(add, 2, [10, 20])
invoke(addMany, 3, 10, 20, 30)//invoke(addMany, 3, [10, 20,30])

//http://.../categories/appliance/products/1
//http://.../categories/appliance/products/1000-2000/
var sentence = 'I am a consultant, and leave in Bangalore!! Wow'
var split = (sen, ...separators) => {
    return []
}
split(sentence, ' ', ',', '!')
split(sentence,' ')
