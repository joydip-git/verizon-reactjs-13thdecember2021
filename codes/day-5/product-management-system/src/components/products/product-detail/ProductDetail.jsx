import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getProductById } from '../../../service/productService'

class ProductDetail extends Component {
    state = {
        product: undefined
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
        this.getProductData()
    }
    componentDidUpdate(oldProps, oldState) {
        console.log('update')
        if (oldProps.selectedId !== this.props.selectedId)
            this.getProductData()
    }
    getProductData() {
        // const p = getProductById(this.props.selectedId)
        // if (p) {
        //     this.setState({
        //         product: p
        //     })
        // }
        getProductById(this.props.selectedId)
            .then(
                (resp) => {
                    this.setState({
                        product: resp.data
                    })
                },
                (err) => {
                    console.log(err.message)
                }
            )
    }
    componentWillUnmount() {

    }
}
ProductDetail.propTypes = {
    selectedId: PropTypes.number.isRequired
}
export default ProductDetail
