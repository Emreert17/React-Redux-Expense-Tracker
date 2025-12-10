import { useSelector } from "react-redux";
import SectionDivider from "../SectionDivider/SectionDivider";
import { selectAllExpenses } from "../../store/Slices/BudgetSlice";
import { categories } from "../../data/data";
import { expenses_titles } from "../../data/data";

export default function Expenses() {
  const expenses = useSelector(selectAllExpenses);
  return (
    <>
      <div className="px-4">
        <SectionDivider>My Expenses</SectionDivider>
      </div>
      <div className="px-4 my-3">
        <div className="grid grid-cols-4 px-6 py-2 font-semibold bg-stone-300  border border-stone-300">
          {expenses_titles.map((t) => (
            <h4 key={t.id}>{t.title}</h4>
          ))}
        </div>
        <div>
          {expenses.map((exp) => {
            const category = categories.find((c) => c.id === exp.categoryId);

            return (
              <ul
                key={exp.id}
                className="grid grid-cols-4 px-6 py-2 items-center border-2  border-stone-300"
              >
                <li>{exp.name}</li>
                <li>${exp.cost}</li>
                <li>{exp.date}</li>
                <li>{category?.name}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
