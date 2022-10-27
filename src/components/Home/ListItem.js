import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
import {ImCheckmark } from "react-icons/im";

function ListItem(props) {
  const icon = props.flashed === "true" ? (
    <BsFillLightningFill size={36} className={"text-yellow-500"} />
  ) : (
    <ImCheckmark size={36} className={"text-green-500"} />
  );
  return (
    <li
      className={`flex flex-row items-center justify-start font-comfortaa rounded ml-4 my-4 mx-5`}
    >
      <section className="flex flex-row justify-start items-start">
        {icon}
        <div className="text-xl text-center font-bold w-16">{props.grade[0]}</div>
        <section className ="text-left">
          <h1 className="font-bold text-xl whitespace-nowrap">
            {props.name}
          </h1>
          <h2 className="text-base">{props.location}</h2>
          <h2 className="text-base">{props.completed}</h2>
        </section>
      </section>
    </li>
  );
}

export default ListItem;
