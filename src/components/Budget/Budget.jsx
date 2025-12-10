import { useSelector } from "react-redux";
import SectionDivider from "../SectionDivider/SectionDivider";
import BudgetModal from "./BudgetModal";
import BudgetList from "./BudgetList";
import CreateBudget from "./CreateBudget";
import { Link } from "react-router";

export default function Budget() {
  const isModalOpen = useSelector((state) => state.modal.isBudgetModalOpen);
  const budgets = useSelector((state) => state.budget.budgets);

  return (
    <>
      <section id="budget" className="">
        <div className="flex flex-col gap-5">
          <SectionDivider>My Budgets</SectionDivider>
          <div className="grid grid-cols-3 gap-5">
            <CreateBudget />
            {budgets.map((budget) => (
              <Link key={budget.id} to={`/budget/${budget.categoryId}`}>
                <BudgetList budget={budget} />
              </Link>
            ))}
            {isModalOpen && <BudgetModal />}
          </div>
        </div>
      </section>
    </>
  );
}
