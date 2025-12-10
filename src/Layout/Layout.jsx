import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Tabs from "../components/TabsFilter/Tabs";

export default function Layout() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="flex">
        <aside>
          <Tabs />
        </aside>
        <main className="mx-8 my-5 p-5 w-full">
          <Outlet />
        </main>
      </div>
    </>
  );
}
