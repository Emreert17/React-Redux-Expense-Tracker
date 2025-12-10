import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { seedBudgets } from "../../data/DummyData";

const BudgetSlice = createSlice({
  name: "budget",
  initialState: {
    budgets: seedBudgets,
  },
  reducers: {
    createBudget: (state, action) => {
      const isBudget = state.budgets.some(
        (b) => b.categoryId === action.payload.categoryId
      );

      if (!isBudget) {
        state.budgets.push({
          id: crypto.randomUUID(),
          categoryId: action.payload.categoryId,
          amount: Number(action.payload.amount),
          expenses: [],
          spent: 0,
        });
      }
    },
    removeBudget: (state, action) => {
      const { budgetId } = action.payload;
      state.budgets = state.budgets.filter((b) => b.id !== budgetId);
    },
    addExpense: (state, action) => {
      const { budgetId, expense } = action.payload;
      const budget = state.budgets.find((b) => b.id === budgetId);
      if (budget) {
        budget.expenses.push(expense);
        budget.spent += expense.cost;
      }
    },
    removeExpense: (state, action) => {
      const { budgetId, expId } = action.payload;
      const budget = state.budgets.find((b) => b.id === budgetId);
      const expense = budget.expenses.find((e) => e.id === expId);
      budget.spent -= expense.cost;
      budget.expenses = budget.expenses.filter((e) => e.id !== expId);
    },
  },
});

export const selectBudgets = (state) => state.budget.budgets;

export const selectAllExpenses = createSelector([selectBudgets], (budgets) =>
  budgets.flatMap((b) =>
    b.expenses.map((e) => ({
      ...e,
      budgetId: b.id,
      categoryId: b.categoryId,
    }))
  )
);

export const { createBudget, removeBudget, addExpense, removeExpense } =
  BudgetSlice.actions;
export default BudgetSlice.reducer;
