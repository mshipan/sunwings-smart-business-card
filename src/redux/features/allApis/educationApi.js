import baseApi from "../baseApi";

const educationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEducation: builder.query({
      query: () => "/educations",
      providesTags: ["education"],
    }),
    createEducation: builder.mutation({
      query: (data) => ({
        url: "/educations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["education"],
    }),
    deleteEducation: builder.mutation({
      query: ({ uid }) => ({
        url: `/educations/${uid}`,
        method: "DELETE",
      }),
      invalidatesTags: ["education"],
    }),
  }),
});

export const {
  useGetAllEducationQuery,
  useCreateEducationMutation,
  useDeleteEducationMutation,
} = educationApi;
