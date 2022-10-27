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

function AchievementInfo(props) {
  const route = props.route;
  const img =
    route.img !== "null"
      ? route.img
      : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";

  return (
    <main className="flex flex-col text-left m-4 h-screen overflow-auto pb-28">
      <section className="flex flex-row">
        <IoIosArrowBack
          size={32}
          className={"text-secondary cursor-pointer"}
          onClick={() => {
            props.setOpenInfo(!props.openInfo);
            props.setSelectedRoute(["", ""]);
          }}
        />
        <span className="mx-5 text-left w-5/6">
          <h1 className="font-bold text-2xl text-left cursor-pointer hover:underline">
            {route.routeName}
          </h1>
          <h2 className="text-base">{route.location}</h2>
        </span>
      </section>
      <section className="flex flex-row my-6 items-center justify-start">
        <span className="mx-5 text-left">
          <h2 className="font-bold text-base text-left">{"Grade"}</h2>
          <h1 className="text-3xl font-bold">{route.difficulty[0]}</h1>
        </span>
        <div className="flex flex-row">
          {route.completed === "true" && (
            <ImCheckmark
              size={32}
              className={"text-green-500 cursor-pointer"}
            />
          )}
          {route.flashed === "true" && (
            <BsLightningFill
              size={32}
              className={"text-yellow-500 cursor-pointer"}
            />
          ) }
        </div>
      </section>
      <section className="mx-5">
        <h1 className="font-bold">Description</h1>
        <br />
        <p className="w-2/3 break-normal">{route.description}</p>
        <br />
        <img className=" rounded-2xl" src={img} />
      </section>
      <br />
      <h1 className="font-bold">completed on: {route.completedOn}</h1>
    </main>
  );
}

export default AchievementInfo;
