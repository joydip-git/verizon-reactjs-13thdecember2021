import React, { Component } from 'react'
import { getProductById } from '../../../repository/db'

//{selectedId:pid}
export default class ProductDetail extends Component {
    state = {
        product: undefined
    }
    shouldComponentUpdate(currentProps, currentState){
        // console.log(currentProps.selectedId)
        // console.log(this.props.selectedId)
        // console.log(this.state)
        // return true;
        // if(currentProps.selectedId===this.props.selectedId){
        //     return false
        // }
        // else{
        //     return true
        // }
        return true
    }
    render() {
        const { product } = this.state
        return (
            <div>
                {
                    product && this.state.product.productName
                }
            </div>
        )
    }
    componentDidMount() {
        this.getProduct()
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('update')
        if (oldProps.selectedId !== this.props.selectedId)
            this.getProduct()
    }
    getProduct() {
        const p = getProductById(this.props.selectedId)
        if (p) {
            this.setState({
                product: p
            })
        }
    }
    componentWillUnmount() {

    }
}
