import { RxDashboard } from "react-icons/rx";
import { LuPiggyBank } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";

const date = new Date();

export const formatted = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
})
  .format(date)
  .replace(/\//g, "-");

export const tabs_filter = [
  { id: 1, title: "Dashboard", icon: RxDashboard, value: "dashboard" },
  { id: 2, title: "Budget", icon: LuPiggyBank, value: "budget" },
  { id: 3, title: "Expenses", icon: GiReceiveMoney, value: "expense" },
];
export const categories = [
  {
    id: "c1",
    name: "Groceries",
    icon: "FaCartShopping",
    color: "#4CAF50",
  },
  {
    id: "c2",
    name: "Shopping",
    icon: "RiShoppingBagFill",
    color: "#FF8A80",
  },
  {
    id: "c3",
    name: "Dining",
    icon: "IoFastFood",
    color: "#FFB74D",
  },
  {
    id: "c4",
    name: "Transport",
    icon: "IoMdBus",
    color: "#29B6F6",
  },
  {
    id: "c5",
    name: "Health",
    icon: "MdHealing",
    color: "#E53935",
  },
  {
    id: "c6",
    name: "Entertainment",
    icon: "FaClapperboard",
    color: "#7E57C2",
  },
  {
    id: "c7",
    name: "Utilities",
    icon: "MdWaterDrop",
    color: "#0288D1",
  },
  {
    id: "c8",
    name: "Education",
    icon: "HiBookOpen",
    color: "#8D6E63",
  },
  {
    id: "c9",
    name: "Travel",
    icon: "FaSuitcaseRolling",
    color: "#26A69A",
  },
  {
    id: "c10",
    name: "Savings",
    icon: "GiMoneyStack",
    color: "#D4AF37",
  },
];
export const expenses_titles = [
  { id: 1, title: "Name" },
  { id: 2, title: "Amount" },
  { id: 3, title: "Date" },
  { id: 4, title: "Category Name" },
];
export const lates_expenses_titles = [
  { id: 1, title: "Name" },
  { id: 2, title: "Amount" },
  { id: 3, title: "Date" },
  { id: 4, title: "Action" },
];
