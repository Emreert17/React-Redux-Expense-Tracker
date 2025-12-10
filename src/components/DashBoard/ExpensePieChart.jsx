import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);
export default function ExpensePieChart({ labels, spentValue }) {
  const total = spentValue.reduce((acc, val) => acc + val, 0);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Expense",
        data: spentValue,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      datalabels: {
        formatter: (value) => {
          if (total === 0) return "0%";
          const percentage = ((value / total) * 100).toFixed(1);
          return percentage + "%";
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
  };
  return (
    <>
      <h3 className="font-medium py-2">Expense Distribution Pie Chart</h3>
      <Pie data={data} options={options} />
    </>
  );
}
