const add = (a, b) => { return a + b }
const subtract = (a, b) => a - b

function outer() {
    console.log(this)
    this.x = 10
    //const ref = this

    // function inner() {
    //     console.log(this)
    //     this.y = 20
    //     //this.res = this.x + this.y
    //     this.res = this.y + ref.x
    //     console.log(this.res)
    // }

    const inner = () => {
        console.log(this)
        this.y = 20
        this.res = this.x + this.y
        console.log(this.res)
    }
    inner()
    // const boundInner = inner.bind(this)
    // boundInner()

    //inner.call(this,...)
    //inner.apply(this,[])
}
new outer()