import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/baseApi";
import emailApi from "./features/emailApi";

const Store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [emailApi.reducerPath]: emailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, emailApi.middleware),
});

export default Store;
