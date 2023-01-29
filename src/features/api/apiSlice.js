import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = await getState().auth?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["allBill"],
  endpoints: (builder) => ({}),
});
export default apiSlice;
