import React from 'react'
//props={productInfo:p}
const ProductRow = (props) => {
    const { productInfo } = props
    const row = (<tr>
        <td>
            <img style={{ margin: '2px', width: '50px' }} src={productInfo.imageUrl} alt='NA' title={productInfo.productName} />
        </td>
        <td>
            {productInfo.productName}
        </td>
        <td>
            {productInfo.price}
        </td>
        <td>
            {productInfo.starRating}
        </td>
        <td>
            <button className='btn btn-danger'>Delete</button>
        </td>
    </tr>)
    return row
}

export default ProductRow
