import apiSlice from "../api/apiSlice";

const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      getUsers: builder.query({
        query: (email) => `users?email=${email}`,
      }),
    };
  },
});
export const { useGetUsersQuery } = usersApi;
