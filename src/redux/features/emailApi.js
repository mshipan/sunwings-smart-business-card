import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  tagTypes: ["emailTag"],
  endpoints: () => ({}),
});

export default emailApi;
