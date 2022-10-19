import React from "react";
import List from "./List";
import { FaHammer } from "react-icons/fa";
import { BsFillLightningFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import ListItem from "./ListItem";

function Home() {
  const dummyUserData = {
    name: "Lucy",
    img: "https://styles.redditmedia.com/t5_2spc8g/styles/communityIcon_5aa9ayflu3p91.png",
    title: "net-runner",
  };
  const dummyRouteData = [
    {
      name: "Easy in Easy Chair",
      location: "Grandwall Boulders",
      sublocation: 'Easy Chair',
      grade: "V4",
      description:
        "Start low and traverse right until it is possible to mantle. Slopes and hooks are adbundant here.",
      img: "https://user-images.githubusercontent.com/63982069/196787917-ac15da61-bcae-47ee-931b-37d170019d06.png",
      flashed: false,
      complete: false,
      project: false,
    },
    {
      name: "Dyke Surfer",
      location: "Grandwall Boulders",
      sublocation: 'Easy Chair',
      grade: "V0",
      description:
        "Start on an incut dike edge. Traverse left and up on good holds.",
      img: "",
      flashed: false,
      complete: false,
      project: false,
    },
    {
      name: "Summer Vacation",
      location: "Grandwall Boulders",
      sublocation: 'Black Dyke',
      grade: "V0",
      description:
        "Four star warm up. Climb great jugs from low on the rail up and left, then straight up to top out. Easy, but awkward and off the deck. This is an amazing highball Boulder problem.",
      img: "https://cdn2.apstatic.com/photos/climb/107772743_medium_1494210517.jpg",
      flashed: false,
      complete: false,
      project: false,
    },
  ];

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
        />
        <List
          title={"Your Flashes"}
          icon={<BsFillLightningFill size={32} className="text-primary" />}
        />
        <List
          title={"Your Favorites"}
          icon={<AiFillStar size={32} className="text-primary" />}
        />
        <ListItem
          name={dummyRouteData[0].name}
          location={dummyRouteData[0].location}
          sublocation={dummyRouteData[0].sublocation}
          grade={dummyRouteData[0].grade}
        />
        <ListItem
          name={dummyRouteData[1].name}
          location={dummyRouteData[1].location}
          sublocation={dummyRouteData[1].sublocation}
          grade={dummyRouteData[1].grade}
        />
        <ListItem
          name={dummyRouteData[2].name}
          location={dummyRouteData[2].location}
          sublocation={dummyRouteData[2].sublocation}
          grade={dummyRouteData[2].grade}
        />
      </section>
    </div>
  );
}

export default Home;
