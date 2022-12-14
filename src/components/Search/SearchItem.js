import React from "react";
import { FaHammer } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {ImCheckmark } from "react-icons/im";

function SearchItem(props) {
  const highlight = (props.selectedName === props.name) ? "bg-accent/60" : "";
  const index = props.routes.findIndex(route => route.routeName === props.name)

  return (
    <li
      onClick={() => {
        props.setSelectedRoute([props.routes[index], index]);
        props.setOpenInfo(true)
      }}
      className={`flex flex-row items-center justify-start font-comfortaa rounded mr-4 hover:bg-accent/40  hover:cursor-pointer ${highlight}`}
    >
      <div className="text-3xl text-center font-bold w-16">{props.grade}</div>
      <main className="flex flex-col text-left m-4 w-2/3">
        <section className="flex flex-row items-baseline justify-between">
          <h1 className="font-bold text-2xl text-left cursor-pointer hover:underline">
            {props.name}
          </h1>
          <div className="flex flex-row">
            {props.completed === "true" && (
              <ImCheckmark
                size={20}
                className={"text-green-500 cursor-pointer"}
              />
            )}
            {props.projecting === "true" && (
              <FaHammer
                size={20}
                className={"text-orange-500 cursor-pointer"}
              />
            )}
            {props.flashed === "true" && (
              <BsFillLightningFill
                size={20}
                className={"text-yellow-500 cursor-pointer"}
              />
            )}
            {props.favorite === "true" && (
              <AiFillStar
                size={20}
                className={"text-secondary cursor-pointer"}
              />
            )}
          </div>
        </section>
        <h2 className="text-base">{props.location}</h2>
      </main>
    </li>
  );
}

export default SearchItem;
