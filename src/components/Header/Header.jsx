import { FaCalculator } from "react-icons/fa";
export default function Header() {
  return (
    <>
      <div className="flex items-center bg-neutral-100 border-b border-stone-200 h-15 p-5">
        <div className="flex items-center gap-1">
          <FaCalculator size={30} />
          <h1 className="text-xl px-1">Expense Tracker</h1>
        </div>
      </div>
    </>
  );
}
