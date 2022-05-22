import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { News } from "../types/News";

export const newsAPI = createApi({
  reducerPath: "newsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (bulid) => ({
    getNews: bulid.query<News[], void>({
      query: () => `/news`,
    }),
    getNewsById: bulid.query<News, number>({
      query: (id) => `/news/${id}`,
    }),
  }),
});
