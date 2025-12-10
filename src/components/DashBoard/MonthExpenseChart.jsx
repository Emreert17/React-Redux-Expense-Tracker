import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
export default function MonthExpenseChart({ budgets }) {
  const months = [
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthlyTotal = Array(6).fill(0);
  const allExpenses = budgets.flatMap((b) => b.expenses);

  allExpenses.forEach((e) => {
    const monthIndex = new Date(e.date).getMonth() - 6;
    monthlyTotal[monthIndex] += Number(e.cost);
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: "MonthExpense",
        data: monthlyTotal,
        backgroundColor: "rgba(153, 102, 255, 0.7)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 100 },
      },
    },
  };
  return (
    <>
      <h3 className="font-medium py-2">Monthly Expense Trend</h3>
      <Bar data={data} options={options} />
    </>
  );
}
