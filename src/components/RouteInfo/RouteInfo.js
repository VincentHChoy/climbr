import React from "react";
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
  return (
    <main className="flex flex-col text-left m-4">
      <section className="flex flex-row">
        <IoIosArrowBack size={32} className={"text-secondary cursor-pointer"} />
        <span className="mx-5 text-left w-5/6">
          <h1 className="font-bold text-2xl text-left cursor-pointer hover:underline">
            {props.name}
            {"Easy in Easy Chair"}
          </h1>
          <h2 className="text-base">{"Easy Chair"}</h2>
        </span>
      </section>
      <section className="flex flex-row my-6 items-center justify-start">
        <span className="mx-5 text-left">
          <h2 className="font-bold text-base text-left">{"Grade"}</h2>
          <h1 className="text-3xl font-bold">{"V4"}</h1>
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
        <br/>
        <p>Start low and traverse right until it is possible to mantle. Slopes and hooks are abundant here.</p>
        <br />
        <img className=" rounded-2xl" src="https://image.thecrag.com/427x320/58/e7/58e76bd52cdcda2783526e12cbf427e92b1cd266"/>
      </section>
      <br/>
      <h1 className="font-bold">completed on: October 22nd 2022</h1>
    </main>
  );
}

export default RouteInfo;
