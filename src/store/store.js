import { configureStore, createSlice } from "@reduxjs/toolkit";

const DUMMY_ITEMS = await fetch("https://dummyjson.com/products").then((res) =>
  res.json()
);

const productSlice = createSlice({
  name: "items",
  initialState: DUMMY_ITEMS,
  reducers: {
    addProduct: (state, action) => {
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...addProduct,
        }),
      }).then((res) => res.json());

      state.products = [...state.products, action.payload];
    },
    deleteProduct: (state, action) => {
      fetch(`https://dummyjson.com/products/${action.payload}`, {
        method: "DELETE",
      }).then((res) => res.json());

      state.products = state.products.filter(
        (product) => product.id != action.payload
      );
    },
    updateProduct: (state, action, id) => {
      fetch(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...updateProduct,
        }),
      }).then((res) => res.json());

      const targetIndex = state.products.findIndex(
        (product) => product.id == action.payload.id
      );
      state.products[targetIndex] = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;

export default productSlice;