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

export default function ExpenseBarChart({ labels, spentValue }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expense",
        data: spentValue,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
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
      <h3 className="font-medium py-2">Spending by Category</h3>
      <Bar data={data} options={options} />
    </>
  );
}
