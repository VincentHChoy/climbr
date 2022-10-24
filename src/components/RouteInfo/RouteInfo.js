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
import Icon from "./Icon";

function RouteInfo(props) {
  const route = props.route;
  const [completedOn, setCompletedOn] = useState(route.completedOn);

  const img =
    route.img !== "null"
      ? route.img
      : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";

  const log = (itemToMark, routeName) => {
    props.allRoutes.map((route) => {
      if (route.routeName === routeName) {
        route[itemToMark] = route[itemToMark] === "true" ? "false" : "true";
        if (itemToMark === "flashed") {
          log("completed", route.routeName);
        }
        if(route.completed === 'false') route.flashed = 'false'
      }

      if (itemToMark === "completed") {
        route.completedOn =
          route.completedOn === "not yet"
            ? new Date().toLocaleDateString({
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "not yet";
        setCompletedOn(route.completedOn);
      }
    });

    localStorage.setItem("routes", JSON.stringify(props.allRoutes));
    const newRoutes = JSON.parse(localStorage.getItem("routes"));
    props.setRoutes(newRoutes);
  };

  return (
    <main className="flex flex-col text-left m-4 overflow-hidden">
      <section className="flex flex-row">
        <IoIosArrowBack
          size={32}
          className={"text-secondary cursor-pointer"}
          onClick={() => {
            props.setOpenInfo(!props.openInfo);
            props.setSelectedRoute("");
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
          <Icon
            icon1={
              <ImCheckmark2
                size={32}
                className={"text-green-500 cursor-pointer"}
                onClick={() => log("completed", route.routeName)}
              />
            }
            icon2={
              <ImCheckmark
                size={32}
                className={"text-green-500 cursor-pointer"}
                onClick={() => log("completed", route.routeName)}
              />
            }
            action={route.completed}
          />
          <Icon
            icon1={
              <HiOutlineWrenchScrewdriver
                size={32}
                className={"text-orange-500 cursor-pointer"}
                onClick={() => log("projecting", route.routeName)}
              />
            }
            icon2={
              <HiWrenchScrewdriver
                size={32}
                className={"text-orange-500 cursor-pointer"}
                onClick={() => log("projecting", route.routeName)}
              />
            }
            action={route.projecting}
          />
          <Icon
            icon1={
              <BsLightning
                size={32}
                className={"text-yellow-500 cursor-pointer"}
                onClick={() => log("flashed", route.routeName)}
              />
            }
            icon2={
              <BsLightningFill
                size={32}
                className={"text-yellow-500 cursor-pointer"}
                onClick={() => log("flashed", route.routeName)}
              />
            }
            action={route.flashed}
          />
          <Icon
            icon1={
              <AiOutlineStar
                size={32}
                className={"text-secondary cursor-pointer"}
                onClick={() => log("favorite", route.routeName)}
              />
            }
            icon2={
              <AiFillStar
                size={32}
                className={"text-secondary cursor-pointer"}
                onClick={() => log("favorite", route.routeName)}
              />
            }
            action={route.favorite}
          />
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
      <h1 className="font-bold">completed on: {completedOn}</h1>
    </main>
  );
}

export default RouteInfo;
