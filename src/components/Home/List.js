import React, { useState } from "react";
import ListItem from "./ListItem";

function List(props) {
  const list = props.list.map((route) => {
    // console.log("route",route);
    return (
      <ListItem
        name={route.routeName}
        location={route.location}
        grade={route.difficulty}
        flashed={route.flashed}
        completed = {route.completedOn}
      />
    );
  });

  return (
    <main className="flex flex-col h-1/2 overflow-auto relative mb-10">
      {<ul>{list}</ul>}
    </main>
  );
}

export default List;
