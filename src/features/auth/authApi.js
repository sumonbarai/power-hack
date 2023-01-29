import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: `/registration`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data.accessToken) {
            // user data store in localStore
            localStorage.setItem(
              "auth",
              JSON.stringify({
                accessToken: result.data.accessToken,
                user: result.data.user,
              })
            );
            // redux authSlice update
            dispatch(
              userLoggedIn({
                accessToken: result.data.accessToken,
                user: result.data.user,
              })
            );
          }
        } catch (error) {}
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/login`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result.data.accessToken) {
            // user data store in localStore
            localStorage.setItem(
              "auth",
              JSON.stringify({
                accessToken: result.data.accessToken,
                user: result.data.user,
              })
            );
            // redux authSlice update
            dispatch(
              userLoggedIn({
                accessToken: result.data.accessToken,
                user: result.data.user,
              })
            );
          }
        } catch (error) {}
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
