import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer.js";

const reducers = combineReducers({
  productReducer: productReducer,
  selectedProductReducer: selectedProductReducer,
});

export default reducers;
