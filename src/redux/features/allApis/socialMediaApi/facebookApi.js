import baseApi from "../../baseApi";

const facebookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacebookLinks: builder.query({
      query: () => "/facebook",
      providesTags: ["facebook"],
    }),
    createFacebookLink: builder.mutation({
      query: (data) => ({
        url: "/facebook",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["facebook"],
    }),
    deleteFacebookLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/facebook/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facebook"],
    }),
  }),
});

export const {
  useGetAllFacebookLinksQuery,
  useCreateFacebookLinkMutation,
  useDeleteFacebookLinkMutation,
} = facebookApi;
