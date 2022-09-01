import axios from "axios";

export const getAllProducts = async () => {
   let res = await axios.get("https://fakestoreapi.com/products");
   return res.data;
};
