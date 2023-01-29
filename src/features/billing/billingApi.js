import apiSlice from "../api/apiSlice";

const billingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      addBill: builder.mutation({
        query: (data) => ({
          url: "billing-list",
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["allBill"],
      }),
      getBill: builder.query({
        query: () => ({
          url: "billing-list",
        }),
        providesTags: ["allBill"],
      }),
    };
  },
});
export const { useAddBillMutation, useGetBillQuery } = billingApi;
