import { useSelector } from "react-redux";
import { categories } from "../../data/data";
import { iconMap } from "../../icons/IconMap";

export default function BudgetList({ budget }) {
  const budgetName = categories.find((c) => c.id === budget.categoryId);
  const remaining = budget.amount - budget.spent;
  const percent = (budget.spent / budget.amount) * 100;
  const itemLength = budget.expenses.length;

  const IconComponent = iconMap[budgetName.icon];
  return (
    <>
      <div
        id="budgetList"
        className="w-full h-45 flex flex-col gap-5 p-4 border-2 border-stone-200 rounded-md cursor-pointer"
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-stone-100 border-2 border-stone-300 rounded-full p-3">
              <IconComponent size={25} color={budgetName.color} />
            </span>
            <div className="flex flex-col">
              <h3 className="text-stone-900 font-normal text-xl">
                {budgetName.name}
              </h3>
              <span className="text-sm text-stone-500">{itemLength} Item</span>
            </div>
          </div>

          <div>
            <p className="text-blue-800 font-medium text-lg">
              ${budget.amount}
            </p>
          </div>
        </div>

        <div className="flex flex-col py-3">
          <div className="flex justify-between py-3">
            <span className="text-stone-500 font-normal text-sm">
              ${budget.spent} Spend
            </span>
            <span className="text-stone-500 font-normal text-sm">
              ${percent <= 100 ? remaining : 0} Remaining
            </span>
          </div>

          <div className="w-full h-2 bg-stone-300 rounded-md">
            <div
              className="h-full bg-purple-500 rounded-md transition-all"
              style={{ width: `${percent <= 100 ? percent : "100"}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
