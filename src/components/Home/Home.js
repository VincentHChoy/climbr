import React, { useEffect, useState } from "react";
import List from "./List";
import { AiOutlineDingding } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import ListItem from "./ListItem";

function Home() {
  const [achievements, setAchievements] = useState([]);
  const dummyUserData = {
    name: "Lucy",
    img: "https://styles.redditmedia.com/t5_2spc8g/styles/communityIcon_5aa9ayflu3p91.png",
    title: "net-runner",
  };
  const navigate = useNavigate();
  const currentName = localStorage.getItem("name") || "";

  useEffect(() => {
    const currentName = localStorage.getItem("name");
    if (!currentName) navigate("/");
    else {
      const getAchievements = JSON.parse(
        localStorage.getItem("recent")
      ).reverse();
      setAchievements(getAchievements);
    }
  }, []);

  return (
    <div className="h-screen">
      <section className="flex flex-col justify-center items-center my-5">
        <img className="rounded-full" src={dummyUserData.img}></img>
        <h2 className="text-3xl font-comfortaa font-bold">{currentName}</h2>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center">
          <AiOutlineDingding size={50} className="text-secondary" />
          <h1 className="text-2xl font-comfortaa">Recent Achievements</h1>
        </div>
          <ul className="flex flex-col">
            <List list={achievements} />
          </ul>
      </section>
      <Navbar />
    </div>
  );
}

export default Home;
