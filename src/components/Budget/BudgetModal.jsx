import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { closeBudgetModal } from "../../store/Slices/ModalSlice";
import { useState } from "react";
import { createBudget } from "../../store/Slices/BudgetSlice";

export default function BudgetModal() {
  const [selectedCategory, setSelectedCategory] = useState("c1");
  const [budgetAmount, setBudgetAmount] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  function handleAddBudget() {
    if (budgetAmount !== "" && Number(budgetAmount) !== 0) {
      dispatch(
        createBudget({
          categoryId: selectedCategory,
          amount: budgetAmount,
        })
      );
      dispatch(closeBudgetModal());
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div
        id="budgetmodal"
        className="fixed inset-0 flex items-center justify-center"
      >
        <div className="flex flex-col gap-3 w-120 border-3 border-stone-400 bg-stone-50 rounded-md p-8">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium">Create a New Budget</h3>
            <span
              className="cursor-pointer"
              onClick={() => dispatch(closeBudgetModal())}
            >
              <RxCross2 size={25} />
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="categories" className="font-normal">
              Budget Type
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border-2 border-stone-300 p-2 rounded-sm"
              name="categories"
              id="categories"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="budgetamount" className="font-normal">
              Budget Amount
            </label>
            <input
              value={budgetAmount}
              onChange={(e) => {
                setBudgetAmount(e.target.value);
                setError(false);
              }}
              id="budgetamount"
              className="border-2 border-stone-300 rounded-sm p-2"
              type="number"
              placeholder="e.g. 5000$"
            />
          </div>

          <div className="my-3">
            <button
              onClick={handleAddBudget}
              className="flex justify-center w-full text-white bg-purple-500 hover:bg-purple-600 border rounded-md p-2 cursor-pointer"
            >
              Create Budget
            </button>
          </div>
          <div className="text-red-600 font-medium">
            {error && <p>Budget Amount can't be zero!</p>}
          </div>
        </div>
      </div>
    </>
  );
}
