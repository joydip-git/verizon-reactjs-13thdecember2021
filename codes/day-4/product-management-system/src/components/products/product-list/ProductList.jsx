import React from 'react'
import ProductRow from '../product-row/ProductRow'
import './ProductList.css'

//props={productsData:products, deleteHandler:fn, selectHandler:fn}
const ProductList = (props) => {
    const { productsData, deleteHandler, selectHandler } = props
    const productTable = (
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
                        productsData.map(p => {
                            return <ProductRow productInfo={p} deleteFn={deleteHandler} selectHandler={selectHandler}/>
                        })
                    }
                </tbody>
            </table>
        </div>
    )

    return productTable
}

export default ProductList

