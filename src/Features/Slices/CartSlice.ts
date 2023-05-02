import { createSlice } from "@reduxjs/toolkit";
import { getTotalPrice, getTotalQuantity } from "../../Utils/Utils";

export type cartProduct = {
   id: number;
   name: string;
   cartImg: string;
   price: number;
   quantity: number;
};

interface InitialState {
   showCart: boolean;
   productInCart: Array<cartProduct>;
   total: number;
   totalQuantity: number;
   shipping: number;
   vat: number;
   endPrice: number;
}

const initialState: InitialState = {
   showCart: false,
   productInCart: [],
   total: 0,
   totalQuantity: 0,
   shipping: 50,
   vat: 0,
   endPrice: 0,
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const index = state.productInCart.findIndex(
            (product) => product.id == action.payload.id
         );
         index != -1
            ? (state.productInCart[index].quantity += action.payload.quantity)
            : state.productInCart.push(action.payload);
         state.total = getTotalPrice(state.productInCart);
         state.totalQuantity = getTotalQuantity(state.productInCart);
         state.vat = (state.total * 20) / 100;
         state.endPrice = state.total + state.shipping;
      },
      clearCart: (state) => {
         state.productInCart = initialState.productInCart;
         state.endPrice = initialState.endPrice;
         state.total = initialState.total;
         state.totalQuantity = initialState.totalQuantity;
         state.vat = initialState.vat;
      },
      incrementQuantity: (state, action) => {
         const index = state.productInCart.findIndex(
            (product) => product.id == action.payload
         );
         state.productInCart[index].quantity =
            state.productInCart[index].quantity + 1 > 99
               ? 99
               : (state.productInCart[index].quantity += 1);
         state.total = getTotalPrice(state.productInCart);
         state.totalQuantity = getTotalQuantity(state.productInCart);
         state.vat = (state.total * 20) / 100;
         state.endPrice = state.total + state.shipping;
      },
      decrementQuantity: (state, action) => {
         const index = state.productInCart.findIndex(
            (product) => product.id == action.payload
         );
         state.productInCart[index].quantity =
            state.productInCart[index].quantity - 1 < 1
               ? 1
               : (state.productInCart[index].quantity -= 1);
         state.total = getTotalPrice(state.productInCart);
         state.totalQuantity = getTotalQuantity(state.productInCart);
         state.vat = (state.total * 20) / 100;
         state.endPrice = state.total + state.shipping;
      },

      removeItem: (state, action) => {
         state.productInCart = state.productInCart.filter(
            (product) => product.id !== action.payload.id
         );
         state.total = getTotalPrice(state.productInCart);
         state.totalQuantity = getTotalQuantity(state.productInCart);
         state.vat = (state.total * 20) / 100;
         state.endPrice = state.total + state.shipping;
      },
      toggleCartModal: (state, action) => {
         state.showCart = action.payload;
      },
   },
});

export const {
   addToCart,
   clearCart,
   removeItem,
   // updateQuantity,
   toggleCartModal,
   incrementQuantity,
   decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
