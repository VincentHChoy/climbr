import React, { useState } from "react";
import { BsFillLightningFill } from "react-icons/bs";
import { ImCheckmark } from "react-icons/im";
import AchievementInfo from "./AchievementInfo";

function ListItem(props) {
  const [openInfo, setOpenInfo] = useState(false);
  const icon =
    props.flashed === "true" ? (
      <BsFillLightningFill size={36} className={"text-yellow-500"} />
    ) : (
      <ImCheckmark size={36} className={"text-green-500"} />
    );
  return (
    <li
      onClick={()=>setOpenInfo(!openInfo)}
      className={`flex flex-row items-center justify-start font-comfortaa rounded my-4 mx-5 cursor-pointer`}
    >
      <section className="flex flex-row justify-start items-start">
        {icon}
        <div className="text-xl text-center font-bold w-16">
          {props.grade[0]}
        </div>
        <section className="text-left">
          <h1 className="font-bold text-xl whitespace-nowrap hover:underline">{props.name}</h1>
          {/* <h2 className="text-base">{props.location}</h2> */}
          <h2 className="text-base">{props.completed}</h2>
        </section>
      </section>
      {openInfo && (
        <div className={`fixed top-0 left-0
         h-screen w-screen bg-white`}>
          <AchievementInfo route={props.route} />
        </div>
      )}
    </li>
  );
}

export default ListItem;
