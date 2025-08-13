import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type data ={
  name:string;
  email:string;
  message:string;
}


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    sendEmail: builder.mutation<void,data>({
      query: (body) => ({
        url: 'send',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSendEmailMutation } = api;
