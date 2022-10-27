import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const filterMistakes = props.list.filter(
    (route) => route.completedOn !== "not yet"
  );

  const removeDuplicates = () => {
    const memo = {};
    const result = [];
    filterMistakes.map((route) => {
      memo[route.routeName] = false;
    });

    filterMistakes.map((route) => {
      if (memo[route.routeName] === false) {
        memo[route.routeName] = true;
        result.push(route);
      }
    });;
    return result;
  };

  const uniqueList = removeDuplicates();
  console.log(uniqueList);

  const sortedResult = uniqueList.sort(
    (a, b) => b.difficulty[1] - a.difficulty[1]
  );

  const result = sortedResult;

  const list = result.map((route) => {
    return (
      <ListItem
        name={route.routeName}
        location={route.location}
        grade={route.difficulty}
        flashed={route.flashed}
        completed={route.completedOn}
      />
    );
  });


  return (
    <main className="flex flex-col h-1/2 overflow-auto relative mb-32">
      {<ul>{list}</ul>}
    </main>
  );
}

export default List;
