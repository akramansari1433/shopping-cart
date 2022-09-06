import axios from "axios";

interface ProductType {
   id: number;
   title: string;
   description: string;
   price: number;
   image: string;
}

interface ResponseType {
   data: ProductType[];
   error?: any;
}

export const getAllProducts = async (): Promise<ResponseType> => {
   try {
      let res = await axios.get("https://fakestoreapi.com/products");
      return { data: res.data };
   } catch (error) {
      return { data: [], error: error };
   }
};
