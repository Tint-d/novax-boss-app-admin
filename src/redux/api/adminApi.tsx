/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config/config";
import { BaseApiResponseType, MutationQueryProps } from "../../typings/type";
import useAuth from "../../hooks/useAuth";

const baseQuery = fetchBaseQuery({
  baseUrl: config.baseUrl, // Your API base URL
  prepareHeaders: (headers) => {
    const { token } = useAuth();

    headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
});

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery,
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    getData: builder.query<any, string>({
      query: (url: string) => url,
      providesTags: [{ type: "Data" }],
    }),
    postData: builder.mutation<BaseApiResponseType, MutationQueryProps>({
      query: ({ url, body, method }: MutationQueryProps) => {
        return method === "GET"
          ? { url, method }
          : {
              url,
              method,
              body,
            };
      },
      invalidatesTags: [{ type: "Data" }],
    }),
  }),
});

export const { useGetDataQuery, usePostDataMutation } = adminApi;
