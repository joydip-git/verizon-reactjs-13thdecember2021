import React, { Component } from 'react'
import { getProducts } from '../../../repository/db'
import ProductFilter from '../product-filter/ProductFilter'
import ProductRow from '../product-row/ProductRow'
import './ProductList.css'
//import classes from './ProductList.css'

/**
 * {
 * headStyle: {
    background-color: burlywood;
    border: 1px solid white;
    border-radius: 5px;
    },
    someStyle:{
        font-family: 'Courier New', Courier, monospace;
    }
}
 */

export default class ProductList extends Component {

    constructor() {
        super()
        this.state = {
            products: getProducts(),
            filteredProducts: getProducts(),
            searchText: ''
        }
    }

    updateSearchTextHandler = (eventObj) => {
        const name = eventObj.target.value
        //const mockProducts = [...this.state.products]
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

        // const headStyle = {
        //     backgroundColor: 'burlywood',
        //     border:'1px solid white',
        //     borderRadius:'5px'
        // }

        const tableDesign = (
            <div className='panel panel-primary'>
                <div className='panel panel-body'>
                    <ProductFilter
                        filterText={this.state.searchText}
                        filterTextHandler={this.updateSearchTextHandler} />
                </div>
                <div className='table-responsive'>
                    <table className='table'>
                        {/* <thead style={headStyle}> */}
                        <thead className='headStyle'>
                            {/* <thead className={classes.headStyle}> */}
                            <tr>
                                <th>
                                    Image
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Rating
                                </th>
                                <th>
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.filteredProducts.map(p => {
                                    return <ProductRow productInfo={p} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
        return tableDesign
    }
}
