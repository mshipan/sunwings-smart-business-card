import baseApi from "../../baseApi";

const linkedInApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllLinkedInLinks: builder.query({
      query: () => "/linkedin",
      providesTags: ["linkedin"],
    }),
    createLinkedInLink: builder.mutation({
      query: (data) => ({
        url: "/linkedin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["linkedin"],
    }),
    deleteLinkedInLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/linkedin/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["linkedin"],
    }),
  }),
});

export const {
  useGetAllLinkedInLinksQuery,
  useCreateLinkedInLinkMutation,
  useDeleteLinkedInLinkMutation,
} = linkedInApi;
