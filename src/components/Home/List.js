import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";

function List(props) {
  const [openMenu, setMenu] = useState(null);

  return (
    <div className="flex flex-row justify-between items-start w-80 my-2">
      {props.icon}
      <h1 className="text-2xl text-left"> {props.title}</h1>
      {openMenu ? (
        <AiOutlineMenuUnfold
          size={28}
          className="text-secondary"
          onClick={() => setMenu(!openMenu)}
        />
      ) : (
        <AiOutlineMenu
          size={28}
          className="text-secondary"
          onClick={() => setMenu(!openMenu)}
        />
      )}
      {openMenu && ""}
    </div>
  );
}

export default List;
