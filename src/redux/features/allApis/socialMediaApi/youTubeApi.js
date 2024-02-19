import baseApi from "../../baseApi";

const youTubeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllYouTubeLinks: builder.query({
      query: () => "/youtube",
      providesTags: ["youtube"],
    }),
    createYouTubeLink: builder.mutation({
      query: (data) => ({
        url: "/youtube",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["youtube"],
    }),
    deleteYouTubeLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/youtube/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["youtube"],
    }),
  }),
});

export const {
  useGetAllYouTubeLinksQuery,
  useCreateYouTubeLinkMutation,
  useDeleteYouTubeLinkMutation,
} = youTubeApi;
