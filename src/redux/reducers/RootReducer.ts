import { combineReducers } from "redux";
import productReducer from "./ProductReducer";

const RootReducer = combineReducers({
   products: productReducer,
});

export default RootReducer;
