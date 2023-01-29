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

      deleteBill: builder.mutation({
        query: (_id) => ({
          url: `billing-list/${_id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["allBill"],
      }),

      updateBill: builder.mutation({
        query: ({ _id, editedData }) => ({
          url: `billing-list/${_id}`,
          method: "PATCH",
          body: editedData,
        }),
        invalidatesTags: ["allBill"],
      }),
    };
  },
});
export const {
  useAddBillMutation,
  useGetBillQuery,
  useDeleteBillMutation,
  useUpdateBillMutation,
} = billingApi;
