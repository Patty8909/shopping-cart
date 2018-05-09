import { PRODUCTS } from '../actions'

const initialState = {
  list: []
}

export function showProducts(state = initialState, action) {

  switch (action.type) {
    case PRODUCTS:
      return Object.assign({}, state, {list:action.payload})
    default:
      return state
  }
}