import { useEffect, useState } from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import ReactAudioPlayer from "react-audio-player";
import { FaHome, FaSave } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const MainLayouts = (prop) => {
  const { children, musicName } = prop;
  const [isMute, setIsMute] = useState(false);
  const [vol, setVol] = useState(0.4);
  const [TouchLang, setTouchLang] = useState("id");
  localStorage.setItem("lang", TouchLang);

  useEffect(() => {
    const bgmWarp = document.getElementById("bgm-wrap");
    bgmWarp.style.width = `${vol * 100}%`;
  });
  const increaseVolumeHandler = () => {
    setVol(vol + 0.2);
    setIsMute(false);
    if (vol >= 1) {
      setVol(1);
    }
  };

  const decreaseVolumeHandler = () => {
    setVol(vol - 0.2);
    if (vol <= 0.2) {
      setVol(0);
      setIsMute(true);
    }
  };

  const saveHandler = () => {
    const setting = document.getElementById("setting");
    setting.classList.add("hidden");
    localStorage.setItem("lang", TouchLang);
  };
  return (
    <div className="desktop:w-full desktop:h-screen bg-slate-800">
      <div
        className="bg-app w-screen h-screen bg-slate-900 desktop:w-[50vh] overflow-hidden desktop:h-[80vh] desktop:absolute desktop:top-1/2 desktop:left-1/2 desktop:translate-x-[-50%] desktop:translate-y-[-50%] desktop:p-1 desktop:rounded-lg
     
      "
      >
        <div className="w-full h-full overflow-hidden desktop:rounded-lg">
          <div className="w-full h-[25%] smallPhone:h-[30%] bg-[#FFC7D2]  flex flex-col items-center justify-center"></div>
          <img src="/images/welcome-page.jpg" alt="welcome-img" width={"100%"} />
          {children}
        </div>
        <button
          className="absolute bottom-3 right-3 text-3xl rounded-full p-2 bg-pink-500"
          onClick={() => {
            const setting = document.getElementById("setting");
            setting.classList.remove("hidden");
          }}
        >
          <IoIosSettings className="text-white" />
        </button>
      </div>
      {/* setting */}
      <div className="bg-setting x h-[70%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-5 overflow-hidden  hidden z-10" id="setting">
        <div className="w-full h-full bg-gray-800 rounded-lg relative">
          <div className="header w-full h-[20%] flex items-center justify-center p-10">
            <h1 className="text-3xl mt-2 bg-pink-500 p-2 rounded-lg text-white w-full text-center ">Setting</h1>
          </div>

          <div className="w-full h-[80%] setting-control p-10">
            <div className="w-full h-[90%]">
              <div className="flex flex-col">
                <h3 className="text-white text-2xl flex items-center mb-5 gap-2"> {!isMute ? <GiSpeaker className="text-3xl" /> : <GiSpeakerOff className="text-3xl text-red-500" />} Volume</h3>
                <div className="w-full h-10 flex items-center justify-center">
                  <div
                    className="w-10 h-full bg-pink-500 rounded relative flex items-center justify-center 
                text-white text-2xl cursor-pointer
                "
                    onClick={decreaseVolumeHandler}
                  >
                    -
                  </div>
                  <div className="w-full h-full bg-pink-500 rounded m-3">
                    <div className={`w-[50%] h-full bg-white rounded transition-all ease-in-out duration-300`} id="bgm-wrap"></div>
                  </div>
                  <div
                    className="w-10 h-full bg-pink-500 rounded relative flex items-center justify-center 
                text-white text-2xl
                "
                    onClick={increaseVolumeHandler}
                  >
                    +
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-white text-2xl flex items-center mb-5 mt-5">Language</h3>
                <div className="w-full h-10 flex items-center justify-center gap-5">
                  <button className={`w-32 text-white text-xl ${TouchLang === "id" ? "bg-violet-500" : "bg-pink-500"} rounded p-3`} onClick={() => setTouchLang("id")}>
                    Indonesia
                  </button>
                  <button className={`w-32 text-white text-xl ${TouchLang === "en" ? "bg-violet-500" : "bg-pink-500"} bg-pink-500 rounded p-3`} onClick={() => setTouchLang("en")}>
                    English
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="w-full h-full flex gap-3">
              <button
                className="w-32 h-10 bg-pink-500 rounded text-white flex items-center justify-center text-xl gap-2"
                onClick={() => {
                  const setting = document.getElementById("setting");
                  setting.classList.add("hidden");

                  localStorage.removeItem("isAnswer", false);
                  localStorage.removeItem("isStart", false);
                  window.location.reload();
                }}
              >
                <FaHome />
                Home
              </button>

              <button className="w-32 h-10 bg-pink-500 rounded text-white flex items-center justify-center text-xl gap-2" onClick={saveHandler}>
                <FaSave />
                Save
              </button>
            </div>
          </div>
        </div>
        <ReactAudioPlayer src={`/music/${musicName}`} autoPlay loop volume={vol} id="audio" />
      </div>
      {/* desktop or tablet display */}
      {/* <div className="bg-app w-screen h-screen bg-slate-900 flex items-center justify-center hidden desktop:block">
        <div className="w-full h-full flex items-center justify-center">
          <HiMiniDevicePhoneMobile className="text-9xl text-pink-500" />
          <div className="text-white">
            <h1 className="text-3xl">Your device not supported</h1>
            <h1 className="text-2xl">Please use a mobile device for the best experience</h1>
            <small>&copy; Olyzano Copyright 2024</small>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MainLayouts;
