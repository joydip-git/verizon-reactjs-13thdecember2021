import React, { Component } from 'react'
import { getProducts } from '../../../repository/db'
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
            products: getProducts()
        }
    }

    render() {

        // const headStyle = {
        //     backgroundColor: 'burlywood',
        //     border:'1px solid white',
        //     borderRadius:'5px'
        // }

        const tableDesign = (
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
                        <tr>
                            <td>

                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
        return tableDesign
    }
}
