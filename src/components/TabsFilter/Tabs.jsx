import { Link, useLocation } from "react-router";
import { tabs_filter } from "../../data/data";
import React from "react";

export default function Tabs() {
  const location = useLocation();

  return (
    <>
      <section
        id="tabs_filter"
        className="bg-stone-100 w-55 min-h-150 h-full border border-stone-200 py-4"
      >
        <img className="w-35  py-2 mx-3 my-4" src="/icon.png" alt="" />
        <div className="flex flex-col gap-3 p-2">
          {tabs_filter.map((tab) => {
            const isActive = location.pathname === `/${tab.value}`;

            return (
              <Link
                to={`/${tab.value}`}
                key={tab.id}
                className={`flex items-center gap-2 justify-start text-lg py-3 px-2 rounded-md cursor-pointer 
                ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-300"}`}
              >
                <span>
                  {React.createElement(tab.icon, {
                    size: 25,
                  })}
                </span>
                {tab.title}
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
