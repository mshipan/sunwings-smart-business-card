import emailApi from "../../emailApi";

const userContactApi = emailApi.injectEndpoints({
  endpoints: (builder) => ({
    sendEmail: builder.mutation({
      query: (data) => ({
        url: "/email/send-email",
        method: "POST",
        body: data,
      }),
      providesTags: ["emailTag"],
    }),
  }),
});

export const { useSendEmailMutation } = userContactApi;
