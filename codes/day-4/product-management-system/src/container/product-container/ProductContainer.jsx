import React, { Component } from 'react'
import { deleteProduct, getProducts } from '../../repository/db'
import ProductFilter from '../../components/products/product-filter/ProductFilter'
import ProductList from '../../components/products/product-list/ProductList'
import ProductDetail from '../../components/products/product-detail/ProductDetail'

export default class ProductContainer extends Component {

    // constructor() {       
    //     super()
    //     this.state = {
    //         products: getProducts(),
    //         filteredProducts: getProducts(),
    //         searchText: ''
    //     }
    //     //this.props = undefined/{x:100}/{x:200}/{x:300}
    //     /**
    //      * this.state = {
    //         products: [],
    //         filteredProducts: [],
    //         searchText: ''
    //     }
    //      */
    // }

    state = {
        products: [],
        filteredProducts: [],
        searchText: '',
        loaded: false,
        selectedProductId: 0
    }

    deleteProductHandler = (id) => {

        alert('delete')
        //delete from the source
        if (deleteProduct(id)) {
            this.setState((currentState) => {
                return {
                    products: getProducts(),
                    filteredProducts: currentState.filteredProducts.splice(currentState.filteredProducts.findIndex(p => p.productId === id), 1)
                }
            })
        }
        //update the state also if the deletion from source is successful
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

        const { searchText, filteredProducts, loaded, selectedProductId } = this.state

        const containerDesign = (
            <div className='panel panel-primary'>
                <div className='panel panel-body'>
                    <ProductFilter
                        filterText={searchText}
                        filterTextHandler={this.updateSearchTextHandler} />
                </div>
                {
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

    //lifecycle hook
    componentDidMount() {
        // setTimeout(
        //     () => {
        const products = getProducts()
        this.setState({
            products: products,
            filteredProducts: products,
            loaded: true
        })
        // }, 2000)
    }
}
