import {
   LOADING_DATA,
   Product,
   ProductDispatchTypes,
   SET_ERROR,
   SET_PRODUCTS,
} from "../actions/actionTypes";

interface InitialState {
   loading: boolean;
   products?: Product[];
   error?: string;
}

const initialState: InitialState = {
   loading: false,
   products: [],
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
      default:
         return state;
   }
};

export default productReducer;
