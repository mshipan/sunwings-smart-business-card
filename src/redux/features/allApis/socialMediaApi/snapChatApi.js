import baseApi from "../../baseApi";

const snapChatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSnapChatLinks: builder.query({
      query: () => "/snapchat",
      providesTags: ["snapchat"],
    }),
    createSnapChatLink: builder.mutation({
      query: (data) => ({
        url: "/snapchat",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["snapchat"],
    }),
    deleteSnapChatLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/snapchat/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["snapchat"],
    }),
  }),
});

export const {
  useGetAllSnapChatLinksQuery,
  useCreateSnapChatLinkMutation,
  useDeleteSnapChatLinkMutation,
} = snapChatApi;
