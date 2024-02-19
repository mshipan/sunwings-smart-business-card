import baseApi from "../../baseApi";

const instagramApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllInstagramLinks: builder.query({
      query: () => "/instagram",
      providesTags: ["instagram"],
    }),
    createInstagramLink: builder.mutation({
      query: (data) => ({
        url: "/instagram",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["instagram"],
    }),
    deleteInstagramLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/instagram/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["instagram"],
    }),
  }),
});

export const {
  useGetAllInstagramLinksQuery,
  useCreateInstagramLinkMutation,
  useDeleteInstagramLinkMutation,
} = instagramApi;
