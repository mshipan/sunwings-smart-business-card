import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
  }),
  tagTypes: ["logo", "banner", "visitInfo", "sCardImg", "pCardImg"],
  endpoints: () => ({}),
});

export default baseApi;
