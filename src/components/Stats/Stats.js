import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Stats(props) {
  const [resetMsg, setResetMsg] = useState(false);
  const [emptyGraph, setEmptyGraph] = useState(false);

  const dummyUserData = {
    name: "Lucy",
    img: "https://styles.redditmedia.com/t5_2spc8g/styles/communityIcon_5aa9ayflu3p91.png",
    title: "net-runner",
  };

  const initalRoutes = JSON.parse(localStorage.getItem("routes"));

  const getStats = () => {
    const completed = initalRoutes.filter(
      (route) => route.completed === "true"
    );
    const flashed = initalRoutes.filter(
      (route) => route.flashed === "true"
    ).length;
    const highestGrade =
      completed.length > 0
        ? completed[completed.length - 1].difficulty[0]
        : "N/A";

    const gradeDistribution = {};

    const getGrades = completed.map((route) => {
      if (route.difficulty[0] in gradeDistribution)
        gradeDistribution[route.difficulty[0]] += 1;
      else gradeDistribution[route.difficulty[0]] = 1;
    });

    return {
      highestGrade: highestGrade,
      routesCompleted: completed.length,
      flashes: flashed,
      gradeDistribution: gradeDistribution,
    };
  };

  const stats = getStats();
  // console.log(stats.gradeDistribution);
  // localStorage.setItem("routes", JSON.stringify(props.allRoutes));

  const getGrades = () => {
    const data = [];

    const colors = [
      "#5FCCE4",
      "#5A6DE0",
      "#1976d2",
      "#17E5C9",
      "#BF17E5",
      "#8217E5",
      "#E517A5",
      "#17E54F",
      "#0767FD",
      "#FD0740",
    ];
    for (const grade in stats.gradeDistribution) {
      data.push({
        title: grade,
        value: stats.gradeDistribution[grade],
        color: colors.shift(),
      });
    }
    return data;
  };

  useEffect(() => {
    if (Object.keys(stats.gradeDistribution).length === 0) {
      setEmptyGraph(true);
    }
  }, []);

  const data = getGrades();

  return (
    <div className="">
      <section className=" flex flex-col justify-around items-center my-2 py-10">
        <img className="rounded-full" src={dummyUserData.img}></img>
        <h2 className="text-3xl font-comfortaa font-bold">
          {dummyUserData.name}
        </h2>
        <section className="flex flex-row flex-wrap items-start justify-start w-90 my-5">
          <span className="mx-5 text-left">
            <h2 className="font-bold text-base text-left">
              {"Routes Completed"}
            </h2>
            <h1 className="text-3xl font-bold">{stats.routesCompleted}</h1>
          </span>
          <span className="mx-5 text-left">
            <h2 className="font-bold text-base text-left">
              {"Number of Flashes"}
            </h2>
            <h1 className="text-3xl font-bold">{stats.flashes}</h1>
          </span>
          <span className="mx-5 text-left">
            <h2 className="font-bold text-base text-left">
              {"Highest Completed Grade"}
            </h2>
            <h1 className="text-3xl font-bold">{stats.highestGrade}</h1>
          </span>
        </section>
        {emptyGraph && (
          <Link to="/search">
            <h1 className="text-center my-16 cursor-pointer hover:underline">
              Log some routes to see the graph
            </h1>
          </Link>
        )}
        {!emptyGraph && (
          <div className="my-5">
            <PieChart
              style={{ width: "300px", height: "300px" }}
              data={data}
              lineWidth={20}
              paddingAngle={18}
              rounded
              // label={(data) => data.dataEntry.title}
              labelStyle={(index) => ({
                fill: data[index].color,
                fontSize: "5px",
                fontFamily: "sans",
                color: "#5A6DE0",
              })}
              label={({ x, y, dx, dy, dataEntry }) => (
                <text
                  dominantBaseline="central"
                  textAnchor="middle"
                  style={{
                    fontSize: "5px",
                    pointerEvents: "none",
                  }}
                >
                  <tspan
                    style={{ fill: `${dataEntry.color}`, fontWeight: "bold" }}
                    x={x}
                    y={y}
                    dx={dx}
                    dy={dy}
                  >
                    {dataEntry.title}
                  </tspan>
                  <tspan x={x} y={y + 5} dx={dx} dy={dy}>
                    {dataEntry.value}
                  </tspan>
                </text>
              )}
              labelPosition={50}
              animate
            />
          </div>
        )}

        <div className="flex flex-col">
          <Button
            text={"Reset Progress"}
            handleClick={() => setResetMsg(!resetMsg)}
          />
          {resetMsg && (
            <>
              <br />
              <span className="text-red-500 text-center">Are you sure?</span>
              <Button
                text={"Yes"}
                color={"text-red-500 border-red-500 hover:bg-red-500 px-2"}
                handleClick={() => localStorage.clear()}
              />
            </>
          )}
        </div>
      </section>
      <Navbar/>
    </div>
  );
}

export default Stats;
