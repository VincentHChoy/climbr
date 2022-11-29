import "./App.css";
import Button from "./components/Button/Button";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiFillDownCircle } from "react-icons/ai";
import Fade from "react-reveal/Fade";

function App() {
  const sectionStyle =
    "flex flex-col md:flex-row items-center justify-around p-10 bg-[#D6DEFF] mt-1/2";
  return (
    <div className="h-screen bg-[#EEF3FC]">
      <a href="https://github.com/VincentHChoy/climbr" target="_blank">
        <AiFillGithub
          size={50}
          className="text-secondary fixed top-0 right-0 opacity-80 cursor-pointer"
        />
      </a>

      <main className="flex flex-col items-center justify-center h-5/6">
        <img className="md:h-4/6 -my-10" src="mountain.png" />
        <h1 className="font-comfortaa text-black md:text-9xl text-6xl font-bold">
          Climbr
        </h1>
        <h1 className="font-comfortaa text-3xl text-center my-3 mx-6 md:w-1/3">
          A journal for logging your Squamish climbing journey
        </h1>

        <Link to="/reg">
          <Button text={"Next"} />
        </Link>
      </main>
      <AiFillDownCircle
        size={50}
        className="text-primary hover:text-[#D6DEFF] cursor-pointer animate-bounce h-1/6 mx-auto"
        onClick={(e) => {
          e.preventDefault();
          document?.getElementById("next")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }}
      />
      <section id="next" className={`${sectionStyle}`}>
        <Fade left>
          <img className="rounded-2xl my-10" src="achivements.png" />
          <h1 className="text-center text-4xl break-words">
            See all your sends and flashes for Squamish's top 100 boulders in
            one place
          </h1>
        </Fade>
      </section>
      <section className={`md:flex-row-reverse ${sectionStyle}`}>
        <Fade right>
          <img className="md:w-1/2 rounded-2xl my-10" src="search.png" />
          <h1 className="text-center text-4xl break-words mx-5">
            Filter, Search and log your{" "}
            <bold className="text-green-500">sends</bold>,{" "}
            <bold className="text-yellow-500">flashes</bold>,{" "}
            <bold className="text-orange-500">projects</bold>, and{" "}
            <bold className="text-primary">favorites</bold>
          </h1>
        </Fade>
      </section>

      <section className={sectionStyle}>
        <Fade left>
          <img className="md:w-1/2 rounded-2xl my-10" src="analytics.png"></img>
          <h1 className="text-center text-4xl break-words">
            Log your progress and see your{" "}
            <bold className="text-secondary">analytics</bold>
          </h1>
        </Fade>
      </section>

      <section className={`md:flex-row-reverse ${sectionStyle}`}>
        <Fade right>
          <img className="md:w-1/2 rounded-2xl my-10" src="mockup.png"></img>
          <h1 className="text-center text-4xl break-words">
            Mobile and Desktop Compatible
          </h1>
        </Fade>
      </section>

      <section className={`flex flex-col md:flex-col ${sectionStyle}`}>
        <Fade down>
          <h1 className="text-center text-4xl break-words py-10">
            Lets Get Climbing!
          </h1>
          <Link to="/reg">
            <Button text={"Start"} />
          </Link>
        </Fade>
      </section>
    </div>
  );
}

export default App;
