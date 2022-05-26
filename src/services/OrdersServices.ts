import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Order } from "../types/Order";

export const ordersAPI = createApi({
  reducerPath: "ordersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (bulid) => ({
    getOrders: bulid.query<Order[], void>({
      query: () => `/orders`,
    }),
    postOrder: bulid.mutation<Order, Partial<Order>>({
      query(newOrder) {
        return {
          url: "/orders",
          method: "POST",
          body: newOrder,
        };
      },
    }),
  }),
});
