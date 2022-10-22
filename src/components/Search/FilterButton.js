import React from "react";

function FilterButton(props) {
  return (
    <button
      className={`border border-secondary rounded-full p-2 mx-2 my-2 ${props.toggleButton}`}
      onClick={props.filter}
    >
      {props.text}
    </button>
  );
}

export default FilterButton;
