import React from 'react'
import ProductRow from '../product-row/ProductRow'
import './ProductList.css'
import PropTypes from 'prop-types'

const ProductList = (props) => {
    const { productsData, deleteHandler, selectHandler } = props
    const productTable = (
        <div className='table-responsive'>
            <table className='table'>
                <thead className='headStyle'>
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
                        productsData.map(p => {
                            return <ProductRow productInfo={p} deleteFn={deleteHandler} selectHandler={selectHandler} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )

    return productTable
}
ProductList.propTypes = {
    productsData: PropTypes.array.isRequired,
    deleteHandler: PropTypes.func.isRequired,
    selectHandler: PropTypes.func.isRequired
}
export default ProductList

