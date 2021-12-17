import React, { Component } from 'react'
import ProductFilter from '../../components/products/product-filter/ProductFilter'
import ProductList from '../../components/products/product-list/ProductList'
import ProductDetail from '../../components/products/product-detail/ProductDetail'
import { deleteProduct, getProducts } from '../../service/productService'
import { connect } from 'react-redux'
import * as actionCreators from '../../redux/actionCreators'

class ProductContainer extends Component {

    state = {
        searchText: '',
        selectedProductId: 0,
    }

    deleteProductHandler = (id) => {
        // deleteProduct(id)
        //     .then(
        //         (resp) => {
        //             if (resp.status === 200) {
        //                 getProducts().then(
        //                     (r) => {
        //                         this.setState({
        //                             errorMessage: '',
        //                             products: r.data,
        //                             filteredProducts: this.state.filteredProducts.splice(
        //                                 this.state.filteredProducts.findIndex(p => p.productId === id),
        //                                 1
        //                             )
        //                         })
        //                     }
        //                 )
        //             }
        //         }, (err) => {
        //             this.setState({
        //                 errorMessage: err.message,
        //                 products: this.state.products,
        //                 filteredProducts: this.state.filteredProducts
        //             })
        //         }
        //     )
    }

    selectProductHandler = (pid) => {
        this.setState({
            selectedProductId: pid
        })
    }
    updateSearchTextHandler = (eventObj) => {
        const name = eventObj.target.value
        if (name !== '') {
            let filteredProducts = this.state.products.filter(p => p.productName.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1)

            if (filteredProducts && filteredProducts.length > 0) {
                this.setState({
                    searchText: name,
                    filteredProducts: filteredProducts
                })
            }
        } else {
            this.setState((oldState => {
                return {
                    searchText: name,
                    filteredProducts: oldState.products
                }
            }))
        }
    }

    render() {

        // const { searchText, filteredProducts, loaded, selectedProductId, errorMessage } = this.state
        const { filteredProducts, loaded, errorMessage } = this.props
        const { searchText, selectedProductId } = this.state

        const containerDesign = (
            <div className='panel panel-primary'>
                <div className='panel panel-body'>
                    <ProductFilter
                        filterText={searchText}
                        filterTextHandler={this.updateSearchTextHandler} />
                </div>
                {
                    errorMessage !== '' ?
                        <span>{errorMessage}</span> :
                        loaded ? (filteredProducts.length > 0 ? (<ProductList productsData={filteredProducts} deleteHandler={this.deleteProductHandler} selectHandler={this.selectProductHandler} />) : 'no record found') : 'not loaded yet'
                }
                <br />
                {
                    selectedProductId > 0 && (<ProductDetail selectedId={selectedProductId} />)
                }
            </div>
        )
        return containerDesign
    }

    componentDidMount() {

        // const promiseObject = getProducts()
        // promiseObject.then(
        //     (resp) => {
        //         this.setState({
        //             products: resp.data,
        //             filteredProducts: resp.data,
        //             loaded: true,
        //             errorMessage: ''
        //         })
        //     },
        //     (err) => {
        //         this.setState({
        //             products: [],
        //             filteredProducts: [],
        //             loaded: true,
        //             errorMessage: err.message
        //         })
        //     }
        // )

        this.props.fetchProducts()

    }
}

const mapStateToProps = (state) => {
    return {
        loaded: state.loaded,
        errorMessage: state.errorMessage,
        products: state.products,
        filteredProducts: state.filteredProducts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {
            const promiseObject = getProducts()
            promiseObject.then(
                (resp) => {
                    const successActionObj = actionCreators.productsSuccessAction(resp.data)
                    dispatch(successActionObj)
                },
                (err) => {
                    const failureActionObj = actionCreators.productsFailureAction(err.message)
                    dispatch(failureActionObj)
                }
            )
        }
    }
}
const connectToStore = connect(mapStateToProps, mapDispatchToProps)
export default connectToStore(ProductContainer)