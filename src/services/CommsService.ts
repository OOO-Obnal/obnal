import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Comms } from '../types/Comms';

export const commsAPI = createApi({
  reducerPath: 'commsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (bulid) => ({
    getComms: bulid.query<Comms[], void>({
      query: () => `/comments`,
    }),
    addPost: bulid.mutation<Comms, Partial<Comms>>({
      query(cumm) {
        return { url: '/comments', method: 'POST', body: cumm };
      },
    }),
    ChangeLikes: bulid.mutation<Comms, Partial<{ id: number; likes: number }>>({
      query(newComm) {
        return {
          url: `/comments/${newComm.id}`,
          method: 'PATCH',
          body: newComm,
        };
      },
    }),
  }),
});
