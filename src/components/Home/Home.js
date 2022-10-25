import React, { useEffect, useState } from "react";
import List from "./List";
import { FaHammer } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";

function Home() {
  const [routes, setRoutes] = useState([]);
  const [user, setUser] = useState([]);

  const dummyUserData = {
    name: "Lucy",
    img: "https://styles.redditmedia.com/t5_2spc8g/styles/communityIcon_5aa9ayflu3p91.png",
    title: "net-runner",
  };

  const setRoutesData = () => {
    fetch("routes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setRoutes(myJson);
      localStorage.setItem("routes", JSON.stringify(myJson));
      });
  };

  const setUserData = () => {
    fetch("user.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setUser(myJson);
        localStorage.setItem("user", JSON.stringify(myJson));
      });
  };

  useEffect(() => {
    setRoutesData();
    setUserData();
  }, []);

  const userData = JSON.parse(localStorage.user);

  return (
    <div className="h-screen">
      <section className="flex flex-col justify-center items-center h-1/2">
        <img className="rounded-full" src={dummyUserData.img}></img>
        <h2 className="text-3xl font-comfortaa font-bold">
          {dummyUserData.name}
        </h2>
        <h3>{dummyUserData.title}</h3>
      </section>
      <section className="flex flex-col items-center justify-center">
        <List
          title={"Your Projects"}
          icon={<FaHammer size={32} className="text-primary" />}
          list={userData.projects}
        />
        <List
          title={"Your Flashes"}
          icon={<BsFillLightningFill size={32} className="text-primary" />}
          list={userData.flashes}
        />
        <List
          title={"Your Favorites"}
          icon={<AiFillStar size={32} className="text-primary" />}
          list={userData.favorites}
        />
      </section>
      <Navbar/>
    </div>
  );
}

export default Home;
