import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "togglemodal",
  initialState: {
    isBudgetModalOpen: false,
  },
  reducers: {
    toggleBudgetModal: (state) => {
      state.isBudgetModalOpen = !state.isBudgetModalOpen;
    },
    closeBudgetModal: (state) => {
      state.isBudgetModalOpen = false;
    },
  },
});

export const { toggleBudgetModal, closeBudgetModal } = modalSlice.actions;
export default modalSlice.reducer;
