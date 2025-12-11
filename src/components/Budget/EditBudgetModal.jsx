import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateBudget } from "../../store/Slices/BudgetSlice";
import { closeBudgetModal } from "../../store/Slices/ModalSlice";

export default function EditBudgetModal({ budget }) {
  const dispatch = useDispatch();
  const [newBudgetAmount, setNewBudgetAmount] = useState("");

  function handleAddNewBudgetAmount() {
    if (newBudgetAmount !== "" && Number(newBudgetAmount) !== 0) {
      dispatch(
        updateBudget({
          budgetId: budget.id,
          newAmount: Number(newBudgetAmount),
        })
      );
      dispatch(closeBudgetModal());
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
            <h3 className="text-lg font-medium">Edit Budget</h3>
            <span
              onClick={() => dispatch(closeBudgetModal())}
              className="cursor-pointer"
            >
              <RxCross2 size={25} />
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="newBudget" className="font-normal">
              New Budget Amount
            </label>
            <input
              value={newBudgetAmount}
              onChange={(e) => setNewBudgetAmount(e.target.value)}
              id="newBudget"
              className="border-2 border-stone-300 rounded-sm p-2"
              type="number"
              placeholder="e.g. 5000$"
            />
          </div>
          <div className="">
            <button
              onClick={handleAddNewBudgetAmount}
              className="flex justify-center w-full text-white bg-purple-500 hover:bg-purple-600 border rounded-md p-2 cursor-pointer"
            >
              Edit Budget
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
