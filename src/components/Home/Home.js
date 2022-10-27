import React, { useEffect, useState } from "react";
import List from "./List";
import { AiOutlineDingding } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Picture from "../ProfilePicture/Picture";

function Home() {
  const [achievements, setAchievements] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const currentName = localStorage.getItem("name");
    if (!currentName) navigate("/");
    else {
      const getAchievements = JSON.parse(localStorage.getItem("recent"));
      setAchievements(getAchievements);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Picture />
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center">
          <AiOutlineDingding size={50} className="text-secondary" />
          <h1 className="text-2xl font-comfortaa">Achievements</h1>
        </div>
        <ul className="flex flex-col overflow-auto ">
          <List list={achievements} />
        </ul>
      </section>
      <Navbar />
    </div>
  );
}

export default Home;
