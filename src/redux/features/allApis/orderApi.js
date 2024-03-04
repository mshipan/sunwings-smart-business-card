import baseApi from "../baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/order",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),

    getAllOrder: builder.query({
      query: () => "/order",
      providesTags: ["orders"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrderQuery } = orderApi;
