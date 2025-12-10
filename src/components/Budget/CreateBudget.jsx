import { useDispatch } from "react-redux";
import { toggleBudgetModal } from "../../store/Slices/ModalSlice";

export default function CreateBudget() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => dispatch(toggleBudgetModal())}
        className="flex flex-col items-center justify-center w-full h-45 bg-stone-50 border border-2 border-dashed border-stone-300 hover:bg-stone-100 cursor-pointer"
      >
        <span className="text-lg font-medium">+</span>
        <span className="text-lg font-normal">Create New Budget</span>
      </button>
    </>
  );
}
