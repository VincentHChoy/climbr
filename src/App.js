import "./App.css";
import Button from "./components/Button/Button";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-screen">
      <main className="flex flex-col items-center justify-center h-screen">
        <img className="h-56 -my-10" src="mountain.png"></img>
        <h1 className="font-comfortaa text-black text-5xl font-bold">Climbr</h1>
        <p className="font-comfortaa text-xl text-center my-3 mx-6 w-72">
          A journal for logging your Squamish climbing journey
        </p>
        <Link to="/reg">
          <Button text={"Next"} />
        </Link>
      </main>
    </div>
  );
}

export default App;
