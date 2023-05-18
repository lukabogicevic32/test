import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      products: productSlice.reducer,
    },
  });
  
  
  export default store;