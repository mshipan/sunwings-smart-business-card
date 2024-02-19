import baseApi from "../../baseApi";

const tiktokApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTiktokLinks: builder.query({
      query: () => "/tiktok",
      providesTags: ["tiktok"],
    }),
    createTiktokLink: builder.mutation({
      query: (data) => ({
        url: "/tiktok",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["tiktok"],
    }),
    deleteTiktokLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/tiktok/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["tiktok"],
    }),
  }),
});

export const {
  useGetAllTiktokLinksQuery,
  useCreateTiktokLinkMutation,
  useDeleteTiktokLinkMutation,
} = tiktokApi;
