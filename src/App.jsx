import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import Budget from "./components/Budget/Budget";
import Dashboard from "./components/DashBoard/Dasboard";
import BudgetDetail from "./components/Budget/BudgetDetail";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "budget",
          element: <Budget />,
        },
        {
          path: "expense",
          element: <Expenses />,
        },
        {
          path: "budget/:id",
          element: <BudgetDetail />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
