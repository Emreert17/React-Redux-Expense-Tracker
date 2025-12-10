import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../store/Slices/BudgetSlice";
import { formatted } from "../../data/data";
import { v4 as uuidv4 } from "uuid";

export default function AddExpenseForm({ budgetId }) {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  function handleAddExpense() {
    if (cost !== "" && Number(cost) !== 0 && name !== "") {
      dispatch(
        addExpense({
          budgetId,
          expense: {
            id: uuidv4(),
            name: name,
            cost: Number(cost),
            date: formatted,
          },
        })
      );
    } else {
      setError(true);
    }
    setName("");
    setCost("");
  }

  return (
    <div
      id="expenseform"
      className="flex flex-col gap-2 border-2 border-stone-300 rounded-md px-6 py-4"
    >
      <h3 className="text-xl font-normal my-2">Add Expense</h3>
      <div className="flex flex-col gap-1">
        <label className="font-medium" htmlFor="expensename">
          Expense Name
        </label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(false);
          }}
          className="rounded-md border-2 border-stone-300 p-2"
          id="expensename"
          type="text"
          placeholder="e.g. Bedroom Decor"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-medium" htmlFor="expenseamount">
          Expense Amount
        </label>
        <input
          value={cost}
          onChange={(e) => {
            setCost(e.target.value);
            setError(false);
          }}
          className="rounded-md border-2 border-stone-300 p-2"
          id="expenseamount"
          type="number"
          placeholder="e.g. 1000"
        />
      </div>
      <div className="my-3">
        <button
          onClick={handleAddExpense}
          className="w-full border bg-purple-800 hover:bg-purple-900 text-stone-50 rounded-md p-2 cursor-pointer"
        >
          Add New Expense
        </button>
      </div>
      {error && (
        <p className="text-red-600 font-medium tracking-wider">
          Amount can't be zero or name can't be empty!
        </p>
      )}
    </div>
  );
}
