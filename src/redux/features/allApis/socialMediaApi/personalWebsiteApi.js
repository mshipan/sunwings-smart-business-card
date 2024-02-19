import baseApi from "../../baseApi";

const personalWebsiteApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPersonalWebsiteLinks: builder.query({
      query: () => "/personal-websites",
      providesTags: ["personalWebsite"],
    }),
    createPersonalWebsiteLink: builder.mutation({
      query: (data) => ({
        url: "/personal-websites",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["personalWebsite"],
    }),
    deletePersonalWebsiteLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/personal-websites/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["personalWebsite"],
    }),
  }),
});

export const {
  useGetAllPersonalWebsiteLinksQuery,
  useCreatePersonalWebsiteLinkMutation,
  useDeletePersonalWebsiteLinkMutation,
} = personalWebsiteApi;
