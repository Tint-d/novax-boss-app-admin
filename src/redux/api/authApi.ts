import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://novax-mm.com/api/v1/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: "admin/auth/login",
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
