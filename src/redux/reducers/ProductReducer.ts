import {
   LOADING_DATA,
   ProductType,
   ProductDispatchTypes,
   SET_ERROR,
   SET_PRODUCTS,
   SET_WISHLIST,
   SET_CART,
   ADD_PRODUCT,
   DELETE_PRODUCT,
} from "../actions/actionTypes";

interface InitialState {
   loading: boolean;
   products: ProductType[];
   wishlist: ProductType[];
   cart: ProductType[];
   error?: string;
}

const initialState: InitialState = {
   loading: false,
   products: [],
   wishlist: [],
   cart: [],
   error: "",
};

const productReducer = (
   state: InitialState = initialState,
   action: ProductDispatchTypes
): InitialState => {
   switch (action.type) {
      case LOADING_DATA:
         return {
            ...state,
            loading: true,
         };
      case SET_PRODUCTS:
         return {
            ...state,
            products: action.payload,
            loading: false,
         };
      case SET_ERROR:
         return {
            ...state,
            error: action.payload,
         };
      case SET_WISHLIST:
         const prodIndexWishlist = state.wishlist?.findIndex(
            (product) => product.id === action.payload.id
         );

         if (prodIndexWishlist >= 0) {
            const updatedWishlist = state.wishlist;
            updatedWishlist.splice(prodIndexWishlist, 1);
            return {
               ...state,
               wishlist: updatedWishlist,
            };
         }
         return {
            ...state,
            wishlist: [...state.wishlist, action.payload],
         };
      case SET_CART:
         const prodIndexCart = state.cart?.findIndex(
            (product) => product.id === action.payload.id
         );

         if (prodIndexCart >= 0) {
            const updatedCart = state.cart;
            updatedCart.splice(prodIndexCart, 1);
            return {
               ...state,
               cart: updatedCart,
            };
         }
         return {
            ...state,
            cart: [...state.cart, action.payload],
         };
      case ADD_PRODUCT:
         return {
            ...state,
            products: [action.payload, ...state.products],
         };
      case DELETE_PRODUCT:
         return {
            ...state,
            products: state.products.filter(
               (product) => product.id !== action.payload
            ),
         };

      default:
         return state;
   }
};

export default productReducer;
