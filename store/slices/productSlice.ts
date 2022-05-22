import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import * as serverService from "@/services/serverService";
import { ProductData } from "@/models/product.model";
import { RootState, store } from "../store";
import { NextRouter } from "next/router";

interface ProductState {
  products: ProductData[];
}

const initialState: ProductState = {
  products: [],
};
export const getProducts = createAsyncThunk(
  "product/get",
  async (keyword?: string) => {
    return await serverService.getProducts(keyword);
  }
);

//ไม่ได้ ใส่  builder.addCase ของ delete โปรดัก เพราะ แค่ต้องการ delete ไม่ได้มีการ เอาค่าที่ได้จาก service มาใช้ทำอะไรต่อ
export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id: string) => {
    await serverService.deleteProduct(id);
    //เรียก store dispatch โดยตรง เพื่อเช็คว่า delete จริงไหม และ refresh state product
    store.dispatch(getProducts());
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

// export selector
export const productSelector = (store: RootState): ProductData[] | undefined =>
  store.product.products;

// export reducer
export default productSlice.reducer;
