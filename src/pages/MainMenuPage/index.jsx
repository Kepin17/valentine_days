import AboutCard from "../../components/AboutCard";
import MainLayouts from "../../components/layouts/mainLayouts";
import { Link } from "react-router-dom";
const MainMenuPage = () => {
  return (
    <>
      <MainLayouts audioId={"audio"} musicName="musicApp.ogg">
        <AboutCard id={"about-display"} />
        <div className="w-full p-10 text-center button-wrap absolute  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-3xl font-bold text-violet-800 ">
            안녕하<span className="text-pink-500">세요</span>
          </h1>
          <h1 className="text-3xl font-bold mb-5 text-violet-800">Happy Valentine Day</h1>
          <Link to={"/main-content"}>
            <button
              className=" bg-white w-[200px] h-12 rounded-lg border-2
          text-pink-500 font-bold text-2xl 
          "
              onClick={() => {
                const audio = document.getElementById("audio");
                audio.play();
                localStorage.setItem("isAnswer", false);
                localStorage.setItem("isStart", true);
              }}
            >
              Get Started
            </button>
          </Link>
          <button
            className=" bg-white w-[200px] h-12 rounded-lg border-2
          text-pink-500 font-bold text-2xl mt-4
          "
            onClick={() => {
              const aboutDisplay = document.getElementById("about-display");
              aboutDisplay.classList.remove("hidden");
            }}
          >
            About
          </button>
        </div>
      </MainLayouts>
    </>
  );
};

export default MainMenuPage;
