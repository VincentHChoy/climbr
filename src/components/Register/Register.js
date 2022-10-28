import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../Button/Button";
import Picture from "../ProfilePicture/Picture";

function Register() {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    localStorage.setItem("pfp","cat.jpg");
    const currentName = localStorage.getItem("name");
    if (currentName) navigate("/home");
  }, []);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRegEx = /^[a-zA-Z0-9]+$/;
    const userResult = name.replace(userRegEx, "");

    if (userResult.length === 0) {
      localStorage.setItem("name", name);
      localStorage.setItem("recent", JSON.stringify([]));
      setRoutesData();
      navigate("/home");
    } else setValidName(false);
  };

  const setRoutesData = () => {
    fetch("routes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        localStorage.setItem("routes", JSON.stringify(myJson));
      });
  };

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <img className="h-56 -my-10" src="mountain.png"></img>
      <h1 className="font-comfortaa text-black text-5xl font-bold">Climbr</h1>
      <Link to="/">
        <IoIosArrowBack
          size={32}
          className={"fixed top-5 left-5 text-secondary cursor-pointer"}
          onClick={() => {}}
        />
      </Link>
      <Picture/>
      <h1 className="font-bold text-3xl mt-14">Enter your name:</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={name}
          onChange={handleChange}
          className="border-2 border-black h-10 my-8 px-2 focus:text-secondary"
          placeholder="your name here"
        />
        <Button text={"Next"} />
        {!validName && (
          <span className="text-red-500 text-center">
            Please enter a name limited to letters and numbers
          </span>
        )}
      </form>
    </main>
  );
}

export default Register;
