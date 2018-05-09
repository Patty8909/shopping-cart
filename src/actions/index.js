import axios from 'axios'
export const PRODUCTS = 'PRODUCTS'

export function showProducts() {

  return (dispatch, getState) => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      dispatch( { type: PRODUCTS, payload: response.data} )
    })
  }

}