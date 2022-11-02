import React, { useEffect, useRef, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Picture from "../ProfilePicture/Picture";

function Stats(props) {
  const [resetMsg, setResetMsg] = useState(false);
  const [emptyGraph, setEmptyGraph] = useState(false);
  const dummy = useRef();
  const navigate = useNavigate();
  const initalRoutes = JSON.parse(localStorage.getItem("routes"));

  const scrollToBottom = () => {
    setResetMsg(!resetMsg);
    setTimeout(() => {
      dummy.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    });
  };

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
        //slice is combining + and -
        gradeDistribution[route.difficulty[0].replace(/\+|\-/gi, "")] += 1;
      else gradeDistribution[route.difficulty[0].replace(/\+|\-/gi, "")] = 1;
    });

    return {
      highestGrade: highestGrade,
      routesCompleted: completed.length,
      flashes: flashed,
      gradeDistribution: gradeDistribution,
    };
  };

  const stats = getStats();

  const getGrades = () => {
    const data = [];

    const colors = [
      "#C478FF",
      "#789EFF",
      "#78FFF7",
      "#78FFAE",
      "#7BFF78",
      "#BCFF78",
      "#ECFF78",
      "#FFD978",
      "#FFB178",
      "#FF9878",
      "#FF7878",
    ].reverse();

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
    <div className="h-screen">
      <section className=" flex flex-col justify-around items-center my-2 py-10">
        <Picture />
        <section className="flex flex-row flex-wrap justify-center md:items-start md:justify-start w-90 my-5">
          <span className="mx-5 text-left">
            <h2 className="font-bold text-base md:text-left">
              {"Routes Completed"}
            </h2>
            <h1 className="text-3xl font-bold text-center">
              {stats.routesCompleted}
            </h1>
          </span>
          <span className="mx-5 text-left">
            <h2 className="font-bold text-base md:text-left">
              {"Number of Flashes"}
            </h2>
            <h1 className="text-3xl font-bold text-center">{stats.flashes}</h1>
          </span>
          <span className="mx-5 text-left">
            <h2 className="font-bold text-base md:text-left">
              {"Highest Completed Grade"}
            </h2>
            <h1 className="text-3xl font-bold text-center">
              {stats.highestGrade}
            </h1>
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
          <div className="h-1/2 my-5">
            <PieChart
              key={data.title}
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

        <div className="flex flex-col mb-14">
          <Button text={"Reset Progress"} handleClick={scrollToBottom} />
          {resetMsg && (
            <>
              <br />
              <span className="text-red-500 text-center mb-10">
                Are you sure?
              </span>
              <Button
                text={"Yes"}
                color={
                  "text-red-500 border-red-500 hover:bg-red-500 px-2 mb-14"
                }
                handleClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              />
            </>
          )}
        </div>
      </section>
      <Navbar />
      <div ref={dummy}></div>
    </div>
  );
}

export default Stats;
