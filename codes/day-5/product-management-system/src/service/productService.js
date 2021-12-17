import axios from "axios"
const baseUrl = 'http://127.0.0.1:8081/products'

export const getProducts = () => {
    const promise = axios.get(baseUrl)
    return promise;
}

export const getProductById = (pid) => {
    return axios.get(`${baseUrl}/${pid}`)
}

// export const addproduct = (product) => {

// }

// export const updateProduct = (product) => {

// }

export const deleteProduct = (pid) => {
    return axios.delete(`${baseUrl}/${pid}`)
}