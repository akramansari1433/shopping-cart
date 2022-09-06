export const LOADING_DATA = "LOADING_DATA";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ERROR = "SET_ERROR";

export type Product = {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
};

interface LoadingData {
   type: typeof LOADING_DATA;
}

interface SetProducts {
   type: typeof SET_PRODUCTS;
   payload: Product[];
}

interface SetError {
   type: typeof SET_ERROR;
   payload: string;
}

export type ProductDispatchTypes = LoadingData | SetProducts | SetError;
