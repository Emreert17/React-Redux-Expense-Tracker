import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import SectionDivider from "../SectionDivider/SectionDivider";
import { FaTrashAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import AddExpenseForm from "./AddExpenseForm";
import BudgetList from "./BudgetList";
import LatestExpenses from "./LatestExpenses";
import { removeBudget } from "../../store/Slices/BudgetSlice";
import { FaPenToSquare } from "react-icons/fa6";
import { useEffect } from "react";
import EditBudgetModal from "./EditBudgetModal";
import { toggleBudgetModal } from "../../store/Slices/ModalSlice";

export default function BudgetDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const editBudgetModal = useSelector((state) => state.modal.isBudgetModalOpen);
  const budgets = useSelector((state) => state.budget.budgets);
  const budget = budgets?.find((b) => b.categoryId === id);
  const percent = (budget?.spent / budget?.amount) * 100;

  const navigate = useNavigate();

  useEffect(() => {
    if (!budget) {
      navigate("/budget");
    }
  }, [budget, navigate]);

  if (!budget) return null;

  return (
    <>
      <section id="budgetdetail">
        <div className="flex flex-col">
          <div className="flex justify-between px-5">
            <div className="flex items-center gap-4">
              <Link to="/budget">
                <FaArrowLeftLong size={25} />
              </Link>
              <SectionDivider>My Expenses</SectionDivider>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => dispatch(toggleBudgetModal())}
                className="flex gap-2 items-center justify-center w-25 bg-blue-500 hover:bg-blue-600 text-stone-50 rounded-md p-2 cursor-pointer px-5"
              >
                <span>
                  <FaPenToSquare />
                </span>
                Edit
              </button>
              <button
                onClick={() => dispatch(removeBudget({ budgetId: budget.id }))}
                className="flex gap-2 items-center justify-center w-25 bg-red-500 hover:bg-red-600 text-stone-50 rounded-md p-2 cursor-pointer px-5"
              >
                <span>
                  <FaTrashAlt size={18} />
                </span>
                Delete
              </button>
            </div>
          </div>

          <div className="flex justify-between gap-10 px-5 my-5">
            <div className="w-140">
              <BudgetList budget={budget} />
              <p className="font-medium text-red-600 p-2">
                {percent >= 100 ? "Out of Limit!" : ""}
              </p>
            </div>
            <div className="w-130 h-80 max-h-90">
              <AddExpenseForm budgetId={budget.id} />
            </div>
          </div>

          <div>
            <LatestExpenses budget={budget} />
          </div>
          <div>{editBudgetModal && <EditBudgetModal budget={budget} />}</div>
        </div>
      </section>
    </>
  );
}
