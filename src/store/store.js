import {configureStore, createSlice} from "@reduxjs/toolkit";

const DUMMY_ITEMS = await fetch("https://dummyjson.com/product").then((res) =>
    res.json()
);

const productSlice = createSlice({
    name: "items",
    initialState: DUMMY_ITEMS,
    reducers: {
        addProduct: (state, action) => {
            state.products = [action.payload, ...state.products];
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const targetIndex = state.products.findIndex(product => product.id === action.payload.id);
            state.products[targetIndex] = action.payload;
        }
    },
});

export const {addProduct, deleteProduct, updateProduct} = productSlice.actions;

const items = configureStore({
    reducer: {
        products: productSlice.reducer,
    }
});

items.subscribe(() => console.log(items.getState()));


export default items;