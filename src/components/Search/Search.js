import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import SearchItem from "./SearchItem";
import FilterButton from "./FilterButton";
import RouteInfo from "../RouteInfo/RouteInfo";

const Search = () => {
  const initalRoutes = JSON.parse(localStorage.getItem("routes"));
  const [routes, setRoutes] = useState(initalRoutes);
  const [openInfo, setOpenInfo] = useState(false);
  const [openMenu, setMenu] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [favorites, setFavorites] = useState(false);
  const [projecting, setProjecting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [flashed, setFlashed] = useState(false);
  const [grade, setGrade] = useState([0, 10]);
  const [selectedRoute, setSelectedRoute] = useState('');
  
  useEffect(() => {
    const newRoutes = JSON.parse(localStorage.getItem("routes"));
    setRoutes(newRoutes);
  }, []);




  const updateGradeRange = (e, data) => {
    setGrade(data);
  };

  const onChangeSearchInput = (event) => {
    // changes the state for get search results to read
    setSearchInput(event.target.value);
  };

  const getSearchResults = (routes) => {
    let searchNames = routes.filter((route) =>
      route.routeName.toLowerCase().includes(searchInput.toLowerCase())
    );

    let notSearchNames = routes.filter(
      (route) =>
        !route.routeName.toLowerCase().includes(searchInput.toLowerCase())
    );

    let searchLocation = notSearchNames.filter((route) =>
      route.location.toLowerCase().includes(searchInput.toLowerCase())
    );
    const searchResults = [...searchNames, ...searchLocation];
    console.log(searchResults);
    return searchResults;
  };

  const filterRoutes = (projecting, favorites, lowGrade, highGrade, search) => {
    //shallow
    let filteredRoutes = [...routes];

    if (projecting) {
      filteredRoutes = filteredRoutes.filter(
        (route) => route.projecting == "true"
      );
    }

    if (favorites) {
      filteredRoutes = filteredRoutes.filter(
        (route) => route.favorite == "true"
      );
    }

    if (completed) {
      filteredRoutes = filteredRoutes.filter(
        (route) => route.completed == "true"
      );
    }

    if (flashed) {
      filteredRoutes = filteredRoutes.filter(
        (route) => route.flashed == "true"
      );
    }
    //filter based on grade
    filteredRoutes = filteredRoutes.filter(
      (route) =>
        Number(route.difficulty[1]) <= highGrade &&
        Number(route.difficulty[1]) >= lowGrade
    );

    if (searchInput) filteredRoutes = getSearchResults(filteredRoutes);

    //selected route

    return filteredRoutes.map((route) => {
      return (
        <SearchItem
          key={route.routeName}
          name={route.routeName}
          location={route.location}
          grade={route.difficulty[0]}
          flashed={route.flashed}
          projecting={route.projecting}
          favorite={route.favorite}
          completed={route.completed}
          setSelectedRoute={setSelectedRoute}
          selectedName={selectedRoute.routeName}
          route={route}
          setOpenInfo={setOpenInfo}
          openInfo={openInfo}
        />
      );
    });
  };



  const toggleFavorites = favorites ? "bg-secondary text-white" : "";
  const toggleProjecting = projecting ? "bg-secondary text-white" : "";
  const toggleFlashed = flashed ? "bg-secondary text-white" : "";
  const toggleCompleted = completed ? "bg-secondary text-white" : "";
  const filteredRoutes = filterRoutes(projecting, favorites, grade[0], grade[1])

  return (
    <main className="flex flex-col md:flex-row md:justify-start h-screen mx-10">
      <aside className="mx-5 md:fixed md:left-5">
        <h1 className="text-3xl my-4">Search</h1>
        <input
          className="border-2 border-black h-10 my-4 px-2 focus:text-secondary"
          placeholder="Search for your routes"
          value={searchInput}
          onChange={onChangeSearchInput}
        />

        <h1 className="flex flex-row justify-between font-roboto font-bold w-4/5 md:w-full">
          FILTER BY
          {openMenu ? (
            <AiOutlineMenuUnfold
              size={28}
              className="text-primary"
              onClick={() => setMenu(!openMenu)}
            />
          ) : (
            <AiOutlineMenu
              size={28}
              className="text-primary"
              onClick={() => setMenu(!openMenu)}
            />
          )}
        </h1>
        {openMenu && (
          <>
            <section className="flex flex-row">
              <FilterButton
                filter={() => {
                  setProjecting(!projecting);
                }}
                text={"projecting"}
                toggleButton={toggleProjecting}
              />
              <FilterButton
                filter={() => {
                  setFavorites(!favorites);
                }}
                text={"favorites"}
                toggleButton={toggleFavorites}
              />
            </section>
            <section className="flex flex-row">
              <FilterButton
                filter={() => {
                  setFlashed(!flashed);
                }}
                text={"flashed"}
                toggleButton={toggleFlashed}
              />
              <FilterButton
                filter={() => {
                  setCompleted(!completed);
                }}
                text={"completed"}
                toggleButton={toggleCompleted}
              />
            </section>
            <h1 className="py-2 font-bold font-roboto">GRADE</h1>
            <button className="border border-secondary bg-secondary rounded-full px-5 py-2 mx-2 text-white my-2">
              V{grade[0]}
            </button>
            <button className="border border-secondary bg-secondary rounded-full px-5 py-2 mx-2 text-white my-2">
              V{grade[1]}
            </button>
            <div className="w-2/3">
              <Slider
                value={grade}
                onChange={updateGradeRange}
                valueLabelDisplay="auto"
                max={10}
              />
            </div>
          </>
        )}
      </aside>
      <section className="md:ml-72 md:mr-16 w-5/6">
        <h1 className="mx-5 md:mx-0 py-2 font-bold font-roboto">RESULTS</h1>
        {
          <ul>
            {routes && filteredRoutes}
          </ul>
        }
      </section>
      <div className="w-5/6">
        <aside className="mx-5 md:fixed md:right-15">
          {routes && openInfo && (
            <RouteInfo
              key={selectedRoute.routeName}
              route={selectedRoute}
              allRoutes ={routes}
              openInfo={openInfo}
              setOpenInfo ={setOpenInfo}
              setSelectedRoute={setSelectedRoute}
              setRoutes={setRoutes}
            />
          )}
        </aside>
      </div>
    </main>
  );
};

export default Search;
