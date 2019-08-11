import {addOrder} from "./actionTypes";

export const addToOrder = dispatch => (product) => {
    dispatch({
      type: addOrder,
      product
    })
  }