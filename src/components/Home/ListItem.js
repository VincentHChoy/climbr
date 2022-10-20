import React from "react";

function ListItem(props) {
  return (
    <li className="flex flex-row items-center justify-start font-comfortaa">
      <div className="text-3xl font-bold w-16">{props.grade}</div>
      <main className="flex flex-col text-left m-4">
        <h1 className="font-bold text-2xl text-left">{props.name}</h1>
        <h2 className="text-base">{props.location}</h2>
      </main>
    </li>
  );
}

export default ListItem;
