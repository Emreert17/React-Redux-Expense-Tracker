import React from "react";
export default function StatsCard({ stat }) {
  return (
    <>
      <div
        id="statscard"
        className="flex justify-between items-center w-full border-2 border-stone-300 hover:bg-stone-50 rounded-md px-8 py-4"
      >
        <div className="flex flex-col gap-1">
          <h4 className="text-sm text-stone-600 font-normal">{stat.label}</h4>
          <p className="text-2xl font-medium">
            <span>{stat.dolarIcon ? "  $" : ""}</span>
            {stat.value}
          </p>
        </div>
        <div>
          <span className="inline-block bg-blue-400 text-stone-100 border-2 border-stone-300 rounded-full p-3">
            {React.createElement(stat.icon, { size: 30 })}
          </span>
        </div>
      </div>
    </>
  );
}
