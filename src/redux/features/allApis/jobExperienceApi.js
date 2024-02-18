import baseApi from "../baseApi";

const jobExperienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobExperience: builder.query({
      query: () => "/job-experiences",
      providesTags: ["jobExperience"],
    }),
    createJobExperience: builder.mutation({
      query: (data) => ({
        url: "/job-experiences",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["jobExperience"],
    }),
    deleteExperience: builder.mutation({
      query: ({ id }) => ({
        url: `/job-experiences/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["jobExperience"],
    }),
  }),
});

export const {
  useGetAllJobExperienceQuery,
  useCreateJobExperienceMutation,
  useDeleteExperienceMutation,
} = jobExperienceApi;
