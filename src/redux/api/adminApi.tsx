/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../config/config";
import {
  BaseApiResponseType,
  GenerateCodeResponseType,
  MutationQueryProps,
} from "../../typings/type";

const baseQuery = fetchBaseQuery({
  baseUrl: config.baseUrl, // Your API base URL
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${config.token}`);

    return headers;
  },
});
export const adminApi = createApi({
  reducerPath: "adminApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://novax-mm.com/api/v1/" }),
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
