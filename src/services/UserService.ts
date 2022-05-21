import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { User } from "../types/User";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (bulid) => ({
    getUsers: bulid.query<User[], void>({
      query: () => `/users`,
    }),
    getUserById: bulid.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
    postUser: bulid.mutation<User, Partial<User>>({
      query(newUser) {
        return {
          url: "/users",
          method: "POST",
          body: newUser,
        };
      },
    }),
  }),
});
