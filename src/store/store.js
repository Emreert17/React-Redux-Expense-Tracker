import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Slices/ModalSlice";
import categoryReducer from "./Slices/CategorySlice";
import budgetReducer from "./Slices/BudgetSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    category: categoryReducer,
    budget: budgetReducer,
  },
});
