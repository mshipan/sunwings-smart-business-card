import baseApi from "../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),
    getUserById: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"],
    }),
    createAuser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateAuserProfilePicture: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/profile-image`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateAuserCoverPhoto: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/profile-cover`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateAuserAboutMe: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/about-me`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    updateAuserBasicInfo: builder.mutation({
      query: ({ uid, data }) => ({
        url: `/users/${uid}/basic-info`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getUserEducation: builder.query({
      query: (uid) => `/users/${uid}/education`,
      providesTags: ["users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateAuserMutation,
  useUpdateAuserProfilePictureMutation,
  useUpdateAuserCoverPhotoMutation,
  useUpdateAuserAboutMeMutation,
  useUpdateAuserBasicInfoMutation,
  useGetUserEducationQuery,
} = usersApi;
