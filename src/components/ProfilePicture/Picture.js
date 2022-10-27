import React, { useEffect, useState } from "react";
import { BsDice6 } from "react-icons/bs";

function Picture() {
  const [picture, setPicture] = useState(localStorage.getItem("pfp"))
  const currentName = localStorage.getItem("name") || "";

  const randomPicture = () => {
    const pictures = ["bird.png", "jraff.png", "capy.webp", "dog.png", "cat.jpg"];
    const number = Math.floor(Math.random() * pictures.length);

    setPicture(pictures[number])
  };

  useEffect(() => {
    localStorage.setItem("pfp", picture);
  }, [picture])
  
  return (
    <main className="flex flex-row justify-center items-start">
      <section className="flex flex-col justify-center items-center my-5">
        <img className="rounded-full w-64 h-64" src={picture} />
        <h2 className="text-3xl my-2 font-comfortaa font-bold">
          {currentName}
        </h2>
      </section>
      <section className="flex items-start">
        <BsDice6 size={24} className="hover:text-primary cursor-pointer my-4" onClick={()=>{
          randomPicture();
        }} />
      </section>
    </main>
  );
}

export default Picture;
