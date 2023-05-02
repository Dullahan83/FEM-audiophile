import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
   id: number;
   slug: string;
   name: string;
   image: image;
   category: string;
   categoryImage: image;
   new: boolean;
   price: number;
   description: string;
   features: string;
   includes: [];
   gallery: Gallery;
   others: [];
};
export type Gallery = {
   first: image;
   second: image;
   third: image;
};
export type image = {
   mobile: string;
   tablet: string;
   desktop: string;
};

type InitialState = {
   productsList: Array<Product>;
};
const initialState: InitialState = {
   productsList: [],
};

export const fetchDatas = createAsyncThunk(
   "products/getProducts",
   async (thunkApi) => {
      try {
         const response = await fetch("/data/data.json");
         const data = await response.json();
         return data;
      } catch (error: any) {
         return error.message;
      }
   }
);

export const productSlice = createSlice({
   name: "products",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchDatas.fulfilled, (state, action) => {
         state.productsList = action.payload;
      });
   },
});

export default productSlice.reducer;
