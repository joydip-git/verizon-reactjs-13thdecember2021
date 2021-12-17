import { Component } from "react"

export const useState = (initialData) => {

    let data = initialData
    //{ x: 0, y: 0 }
    const setData = (newData) => {
        data = newData
        //{
        //  x: prevObj.x + 1
        //}
        console.log(data)
    }

    return [data, setData]
}

class X extends Component {
    state = {
        x: 10,
        val: 0,
        status: false
    }
    //setState({val:10})

    newState = {
        ...this.state,
        val: 10
    }
}