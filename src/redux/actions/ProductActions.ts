import axios from "axios";
import { Dispatch } from "redux";
import {
   LOADING_DATA,
   ProductDispatchTypes,
   SET_ERROR,
   SET_PRODUCTS,
} from "./actionTypes";

export const getProducts = () => (dispatch: Dispatch<ProductDispatchTypes>) => {
   dispatch({ type: LOADING_DATA });
   axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch({ type: SET_PRODUCTS, payload: res.data }))
      .catch((error) => dispatch({ type: SET_ERROR, payload: error }));
};
