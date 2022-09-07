import axios from "axios";
import { Dispatch } from "redux";
import {
   ADD_PRODUCT,
   DELETE_PRODUCT,
   LOADING_DATA,
   ProductDispatchTypes,
   ProductType,
   SET_CART,
   SET_ERROR,
   SET_PRODUCTS,
   SET_WISHLIST,
} from "../types";

export const getProducts =
   () => async (dispatch: Dispatch<ProductDispatchTypes>) => {
      dispatch({ type: LOADING_DATA });
      try {
         const res = await axios.get("https://fakestoreapi.com/products");
         dispatch({ type: SET_PRODUCTS, payload: res.data });
      } catch (error) {
         dispatch({ type: SET_ERROR, payload: (error as Error).message });
      }
   };

export const setProductCart =
   (product: ProductType) => (dispatch: Dispatch<ProductDispatchTypes>) => {
      dispatch({ type: SET_CART, payload: product });
   };

export const setProductWishlist =
   (product: ProductType) => (dispatch: Dispatch<ProductDispatchTypes>) => {
      dispatch({ type: SET_WISHLIST, payload: product });
   };

export const addProduct =
   (product: ProductType) => (dispatch: Dispatch<ProductDispatchTypes>) => {
      dispatch({ type: ADD_PRODUCT, payload: product });
   };

export const deleteProduct =
   (id: number) => (dispatch: Dispatch<ProductDispatchTypes>) => {
      dispatch({ type: DELETE_PRODUCT, payload: id });
   };
