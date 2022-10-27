import React, { useState } from "react";
import { BsHouse, BsSearch } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();
  const [selected, setSelected] = useState("home");
  const selectClass = "box-border rounded-full bg-white";
  const highlightHome =
    pathname === "/home" ? selectClass : "text-white cursor-pointer";
  const highlightSearch =
    pathname === "/search" ? selectClass : "text-white cursor-pointer";
  const highlightStats =
    pathname === "/stats" ? selectClass : "text-white cursor-pointer";

  return (
    <main className="fixed bottom-0 bg-secondary w-screen h-20 rounded">
      <section className="flex flex-row justify-around my-2">
        <Link to="/search">
          <div
            className={`flex justify-center items-center w-20 h-14 ${highlightSearch}`}
            onClick={() => {
              setSelected("search");
            }}
          >
            <BsSearch size={36} />
          </div>
        </Link>
        <Link to="/home">
          <div
            className={`flex justify-center items-center w-20 h-14 ${highlightHome}`}
            onClick={() => {
              setSelected("home");
            }}
          >
            <BsHouse size={36} />
          </div>
        </Link>
        <Link to="/stats">
          <div
            className={`flex justify-center items-center w-20 h-14 text ${highlightStats}`}
            onClick={() => {
              setSelected("stats");
            }}
          >
            <IoStatsChart size={36} />
          </div>
        </Link>
      </section>
    </main>
  );
}

export default Navbar;
