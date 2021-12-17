import React from 'react'
import PropTypes from 'prop-types'

const ProductRow = (props) => {
    const { productInfo, deleteFn, selectHandler } = props
    const row = (<tr>
        <td>
            <img style={{ margin: '2px', width: '50px' }} src={productInfo.imageUrl} alt='NA' title={productInfo.productName}
                onClick={
                    () => { selectHandler(productInfo.productId) }
                }
            />
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
            <button className='btn btn-danger' onClick={
                (e) => {
                    deleteFn(productInfo.productId)
                }
            }>
                Delete
            </button>
        </td>
    </tr>)
    return row
}
ProductRow.propTypes = {
    productInfo: PropTypes.object.isRequired,
    deleteFn: PropTypes.func.isRequired,
    selectHandler: PropTypes.func.isRequired
}
export default ProductRow
