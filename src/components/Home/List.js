import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import ListItem from "./ListItem";

function List(props) {
  const [openMenu, setMenu] = useState(null);
  const list = props.list.map((route) => {
    // console.log("route",route);
    return (
      <ListItem
        name={route.routeName}
        location={route.location}
        grade={route.difficulty}
      />
    );
  });

  return (
    <main className="flex flex-col">
      <div className="flex flex-row justify-between items-start w-80 my-2">
        {props.icon}
        <h1 className="text-2xl text-left font-bold text-secondary"> {props.title}</h1>
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
      </div>
      {openMenu && <ul>{list}</ul>}
    </main>
  );
}

export default List;
