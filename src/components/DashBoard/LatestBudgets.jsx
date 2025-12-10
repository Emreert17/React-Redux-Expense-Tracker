import { useSelector } from "react-redux";
import { Link } from "react-router";
import BudgetList from "../Budget/BudgetList";

export default function LatestBudgets() {
  const budgets = useSelector((state) => state.budget.budgets);
  const startIndex = budgets.length - 4;
  const endIndex = budgets.length;
  const latestBudgets = budgets.slice(startIndex, endIndex);
  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-lg px-2">Recent Budgets Overview</h3>
        <div className="grid grid-cols-2 gap-4 my-2">
          {latestBudgets.map((budget) => (
            <Link key={budget.id} to={`/budget/${budget.categoryId}`}>
              <BudgetList budget={budget} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
