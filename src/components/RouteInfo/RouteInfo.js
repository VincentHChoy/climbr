import React, { useState } from "react";
import { FaHammer } from "react-icons/fa";
import { BsLightning, BsLightningFill } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ImCheckmark2, ImCheckmark } from "react-icons/im";
import {
  HiOutlineWrenchScrewdriver,
  HiWrenchScrewdriver,
} from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";

function RouteInfo(props) {
  const [completed, setCompleted] = useState("Not Yet");
  const img = props.img !== "null" ? props.img : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"

  return (
    <main className="flex flex-col text-left m-4 overflow-hidden">
      <section className="flex flex-row">
        <IoIosArrowBack size={32} className={"text-secondary cursor-pointer"} />
        <span className="mx-5 text-left w-5/6">
          <h1 className="font-bold text-2xl text-left cursor-pointer hover:underline">
            {props.name}
          </h1>
          <h2 className="text-base">{props.location}</h2>
        </span>
      </section>
      <section className="flex flex-row my-6 items-center justify-start">
        <span className="mx-5 text-left">
          <h2 className="font-bold text-base text-left">{"Grade"}</h2>
          <h1 className="text-3xl font-bold">{props.grade}</h1>
        </span>
        <div className="flex flex-row">
          <ImCheckmark2 size={32} className={"text-green-500 cursor-pointer"} />
          <HiOutlineWrenchScrewdriver
            size={32}
            className={"text-orange-500 cursor-pointer"}
          />
          <BsLightning size={32} className={"text-yellow-500 cursor-pointer"} />
          <AiOutlineStar
            size={32}
            className={"text-secondary cursor-pointer"}
          />
        </div>
      </section>
      <section className="mx-5">
        <h1 className="font-bold">Description</h1>
        <br />
        <p className="w-2/3 break-normal">
          {props.desc}
        </p>
        <br />
        <img
          className=" rounded-2xl"
          src={img} 
        />
      </section>
      <br />
      <h1 className="font-bold">completed on: {completed}</h1>
    </main>
  );
}

export default RouteInfo;
