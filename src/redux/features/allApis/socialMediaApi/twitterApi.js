import baseApi from "../../baseApi";

const twitterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTwitterLinks: builder.query({
      query: () => "/twitter",
      providesTags: ["twitter"],
    }),
    createTwitterLink: builder.mutation({
      query: (data) => ({
        url: "/twitter",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["twitter"],
    }),
    deleteTwitterLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/twitter/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["twitter"],
    }),
  }),
});

export const {
  useGetAllTwitterLinksQuery,
  useCreateTwitterLinkMutation,
  useDeleteTwitterLinkMutation,
} = twitterApi;
