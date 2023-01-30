import apiSlice from "../api/apiSlice";

const billingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      addBill: builder.mutation({
        query: (data) => ({
          url: "add-billing",
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
          url: `delete-billing/${_id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["allBill"],
      }),

      updateBill: builder.mutation({
        query: ({ _id, editedData }) => ({
          url: `update-billing/${_id}`,
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
