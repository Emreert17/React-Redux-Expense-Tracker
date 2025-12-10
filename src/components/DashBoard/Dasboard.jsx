import { useSelector } from "react-redux";
import { LuPiggyBank } from "react-icons/lu";
import { GiPayMoney } from "react-icons/gi";
import { IoWalletSharp } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { categories } from "../../data/data";
import StatsCard from "./StatsCard";
import SectionDivider from "../SectionDivider/SectionDivider";
import LatestBudgets from "./LatestBudgets";
import MonthExpenseChart from "./MonthExpenseChart";
import ExpenseBarChart from "./ExpenseBarChart";
import ExpensePieChart from "./ExpensePieChart";

export default function Dashboard() {
  const budgets = useSelector((state) => state.budget.budgets);

  // Expense Pie Chart and Expense Bar Chart Data
  const labels = budgets.map(
    (b) => categories.find((c) => c.id === b.categoryId).name
  );
  const spentValue = budgets.map((b) => b.spent);

  // StatsCard Data
  const totalBudget = budgets.reduce((total, b) => total + b.amount, 0);
  const totalSpend = budgets
    .flatMap((b) => b.expenses)
    .reduce((total, e) => total + e.cost, 0);
  const numberOfBudgets = budgets.length;
  const remaningBudget = totalBudget - totalSpend;
  const percentageOfUsed = totalBudget
    ? ((totalSpend / totalBudget) * 100).toFixed(1)
    : 0;
  const mostExpensiveBudget = budgets.reduce((b, max) =>
    b.spent > max.spent ? b : max
  );
  const mostExpensiveCategory = categories.find(
    (c) => c.id === mostExpensiveBudget.categoryId
  ).name;

  const stats = [
    {
      id: 1,
      label: "Total Budget",
      value: totalBudget,
      icon: LuPiggyBank,
      dolarIcon: true,
    },
    {
      id: 2,
      label: "Total Spend",
      value: totalSpend,
      icon: GiPayMoney,
      dolarIcon: true,
    },
    {
      id: 3,
      label: "No. Of Budget",
      value: numberOfBudgets,
      icon: IoWalletSharp,
      dolarIcon: false,
    },
    {
      id: 4,
      label: "Remaining Budget",
      value: remaningBudget,
      icon: MdOutlinePayment,
      dolarIcon: true,
    },
    {
      id: 5,
      label: "% of Budget Used",
      value: percentageOfUsed + "%",
      icon: GrMoney,
      dolarIcon: false,
    },
    {
      id: 6,
      label: "Most Expensive Category",
      value: mostExpensiveCategory,
      icon: TbReportMoney,
      dolarIcon: false,
    },
  ];

  return (
    <div className="px-4">
      <div className="my-3">
        <SectionDivider>Dashboard</SectionDivider>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {stats.slice(0, 3).map((stat) => (
          <StatsCard key={stat.id} stat={stat} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div
          id="barchart"
          className="flex flex-col jsutify-center items-center border border-stone-300 rounded-md my-10 px-6 py-4"
        >
          <ExpenseBarChart labels={labels} spentValue={spentValue} />
        </div>
        <div
          id="barchart"
          className="flex flex-col jsutify-center items-center border border-stone-300 rounded-md my-10 px-6 py-4"
        >
          <MonthExpenseChart budgets={budgets} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 my-5">
        {stats.slice(3, 6).map((stat) => (
          <StatsCard key={stat.id} stat={stat} />
        ))}
      </div>
      <div className="grid grid grid-cols-[1fr_2fr] gap-6 my-12">
        <div
          id="piechart"
          className="flex flex-col justify-center items-center w-100 border border-stone-300 rounded-md px-6 py-4"
        >
          <ExpensePieChart labels={labels} spentValue={spentValue} />
        </div>
        <div className="">
          <LatestBudgets />
        </div>
      </div>
    </div>
  );
}
