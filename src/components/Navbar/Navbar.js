import React, { useState } from "react";
import { BsHouse, BsSearch } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";

function Navbar() {
  const [selected, setSelected] = useState("home");
  const selectClass = "box-border rounded-full bg-white";
  const highlightHome =
    selected === "home" ? selectClass : "text-white cursor-pointer";
  const highlightSearch =
    selected === "search" ? selectClass : "text-white cursor-pointer";
  const highlightStats =
    selected === "stats" ? selectClass : "text-white cursor-pointer";

  return (
    <main className="fixed bottom-0 bg-secondary w-screen h-20 rounded">
      <section className="flex flex-row justify-around my-2">
        <div className={`flex justify-center items-center w-20 h-14 ${highlightSearch}`}>
          <BsSearch
            size={36}
            className={``}
            onClick={() => {
              setSelected("search");
            }}
          />
        </div>
        <div className={`flex justify-center items-center w-20 h-14 ${highlightHome}`}>
          <BsHouse
            size={36}
            className={``}
            onClick={() => {
              setSelected("home");
            }}
          />
        </div >
        <div className={`flex justify-center items-center w-20 h-14 text ${highlightStats}`}>
          <IoStatsChart
            size={36}
            className={``}
            onClick={() => {
              setSelected("stats");
            }}
          />
        </div>
      </section>
    </main>
  );
}

export default Navbar;
