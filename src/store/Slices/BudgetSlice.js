import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { seedBudgets } from "../../data/DummyData";
import { categories } from "../../data/data";

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
    updateBudget: (state, action) => {
      const { budgetId, newAmount } = action.payload;
      const budget = state.budgets.find((b) => b.id === budgetId);
      if (budget) {
        budget.amount = newAmount;
      }
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

export const selectAllExpenses = createSelector(
  [(state) => state.budget.budgets],
  (budgets) =>
    budgets.flatMap((b) =>
      b.expenses.map((e) => ({
        ...e,
        budgetId: b.id,
        categoryId: b.categoryId,
      }))
    )
);

export const selectDashboardStats = createSelector(
  [(state) => state.budget.budgets],
  (budgets) => {
    // Expense Pie Chart and Expense Bar Chart Data
    const labels = budgets.map(
      (b) => categories.find((c) => c.id === b.categoryId).name
    );
    const spentValue = budgets.map((b) => b.spent);

    // StatsCard Data
    const totalBudget = budgets.reduce((total, b) => total + b.amount, 0);
    const totalSpend = budgets
      .flatMap((b) => b.expenses)
      .reduce((total, e) => total + e.cost, 0);
    const numberOfBudgets = budgets.length;
    const remaningBudget = totalBudget - totalSpend;
    const percentageOfUsed = totalBudget
      ? ((totalSpend / totalBudget) * 100).toFixed(1)
      : 0;
    const mostExpensiveBudget = budgets.reduce((b, max) =>
      b.spent > max.spent ? b : max
    );
    const mostExpensiveCategory = categories.find(
      (c) => c.id === mostExpensiveBudget.categoryId
    ).name;

    return {
      labels,
      spentValue,
      totalBudget,
      totalSpend,
      numberOfBudgets,
      remaningBudget,
      percentageOfUsed,
      mostExpensiveCategory,
      budgets,
    };
  }
);

export const selectLatestBudgets = createSelector(
  [(state) => state.budget.budgets],
  (budgets) => {
    const startIndex = budgets.length - 4;
    const endIndex = budgets.length;
    const latestBudgets = budgets.slice(startIndex, endIndex);

    return { latestBudgets };
  }
);

export const {
  createBudget,
  removeBudget,
  updateBudget,
  addExpense,
  removeExpense,
} = BudgetSlice.actions;
export default BudgetSlice.reducer;
