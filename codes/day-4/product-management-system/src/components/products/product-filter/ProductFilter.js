import React from 'react'

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

export default ProductFilter
