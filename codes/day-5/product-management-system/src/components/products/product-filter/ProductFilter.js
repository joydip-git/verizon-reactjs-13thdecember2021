import React from 'react'
import PropTypes from 'prop-types'

const ProductFilter = (props) => {
    return (
        <div className='row'>
            <div className='col-md-2'>
                Filter By:&nbsp;
            </div>
            <div className='col-md-4'>
                <input type='text' value={props.filterText} onChange={props.filterTextHandler} />
            </div>
        </div>
    )
}
ProductFilter.propTypes = {
    filterText: PropTypes.string.isRequired
}
export default ProductFilter
