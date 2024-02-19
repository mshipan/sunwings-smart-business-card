import baseApi from "../../baseApi";

const whatsAppApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWhatsAppLinks: builder.query({
      query: () => "/whatsapp",
      providesTags: ["whatsApp"],
    }),
    createWhatsAppLink: builder.mutation({
      query: (data) => ({
        url: "/whatsapp",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["whatsApp"],
    }),
    deleteWhatsAppLink: builder.mutation({
      query: ({ id, index }) => ({
        url: `/whatsapp/${id}/${index}`,
        method: "DELETE",
      }),
      invalidatesTags: ["whatsApp"],
    }),
  }),
});

export const {
  useGetAllWhatsAppLinksQuery,
  useCreateWhatsAppLinkMutation,
  useDeleteWhatsAppLinkMutation,
} = whatsAppApi;
