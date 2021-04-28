import { ActionTypes } from "../constants/action-types.js";
export const setProducts = (products) => {
  console.log("action is called");
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  console.log("action called");
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  console.log("remove action called");
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
