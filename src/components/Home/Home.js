import React, { useEffect, useState } from "react";
import List from "./List";
import { AiOutlineDingding } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import { useNavigate, Link } from "react-router-dom";
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

  const emptyList = achievements.length === 0

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
          {emptyList && (
            <Link to="/search">
              <h1 className="text-center my-16 cursor-pointer hover:underline">
                Log your flashes and sends to populate your achievements
              </h1>
            </Link>
          )}
        </ul>
      </section>
      <Navbar />
    </div>
  );
}

export default Home;
