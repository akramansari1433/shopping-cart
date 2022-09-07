export const LOADING_DATA = "LOADING_DATA";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ERROR = "SET_ERROR";
export const SET_WISHLIST = "SET_WISHLIST";
export const SET_CART = "SET_CART";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export type ProductType = {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
};

//dispatch types
interface LoadingData {
   type: typeof LOADING_DATA;
}

interface SetProducts {
   type: typeof SET_PRODUCTS;
   payload: ProductType[];
}

interface SetError {
   type: typeof SET_ERROR;
   payload: string;
}

interface SetWishlist {
   type: typeof SET_WISHLIST;
   payload: ProductType;
}

interface SetCart {
   type: typeof SET_CART;
   payload: ProductType;
}

interface AddProduct {
   type: typeof ADD_PRODUCT;
   payload: ProductType;
}

interface DeleteProduct {
   type: typeof DELETE_PRODUCT;
   payload: number;
}

export type ProductDispatchTypes =
   | LoadingData
   | SetProducts
   | SetError
   | SetCart
   | SetWishlist
   | AddProduct
   | DeleteProduct;
