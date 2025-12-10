import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../store/Slices/BudgetSlice";
import { lates_expenses_titles } from "../../data/data";

export default function LatestExpenses({ budget }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="px-4">
        <h3 className="text-lg font-medium py-2">Latest Expenses</h3>
        <div className="grid grid-cols-4 px-6 py-2 font-semibold bg-stone-300  border border-stone-300">
          {lates_expenses_titles.map((t) => (
            <h4 key={t.id}>{t.title}</h4>
          ))}
        </div>
        <div>
          {budget.expenses.map((exp) => (
            <ul
              key={exp.id}
              className="grid grid-cols-4 px-6 py-2 items-center border-2  border-stone-300"
            >
              <li>{exp.name}</li>
              <li>${exp.cost}</li>
              <li>{exp.date}</li>
              <li
                onClick={() =>
                  dispatch(
                    removeExpense({ budgetId: budget.id, expId: exp.id })
                  )
                }
                className="text-red-600 cursor-pointer"
              >
                <FaTrashAlt size={22} />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
