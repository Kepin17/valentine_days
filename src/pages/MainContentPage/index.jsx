import { useState } from "react";
import TextboxLayouts from "../../components/layouts/TextboxLayouts";
import { MdEmail } from "react-icons/md";
import ErrorTextbox from "../../components/ErrorTextbox";
import MainLayouts from "../../components/layouts/MainLayouts";
import AboutCard from "../../components/AboutCard";
import ReactAudioPlayer from "react-audio-player";

const MainContentPage = () => {
  const [maleName, setMaleName] = useState("");
  const [femaleName, setfemaleName] = useState("");
  const [isAnswer, setIsAnswer] = useState(false);
  const [isStart, setIsStart] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState(0);
  const dialogItemId = [
    `Hi ${femaleName} 👋 Namammu kerennn dan indah ! btw....`,
    `Apa kabarmu hari ini, Baik?Pasti baik kan ya hahaha`,
    `Terimakasih sudah memilih ${maleName} menjadi orang spesial di dalam hidupmu`,
    `Aku tak sabar ingin segera bertemu dan jalan berdua denganmu hingga kita bisa hidup bersama`,
    `Sebelumnya aku mau minta maaf kalau diriku mungkin pernah membuatmu kesal😋`,
    `Aku cuman mau bilang , selamat hari valentine 2024 🎉`,
    `Di hari yang spesial ini kita berdua ingin melakukan kegiatan apa ?`,
    `Melakukan produktivitas atau rebahan seharian ? hahaha`,
    ``,
  ];

  const dialogItemEn = [
    `Hi ${femaleName} 👋 Your name is cool and beautiful! btw....`,
    `How are you today, OK? It must be fine, right? Hahaha'`,
    `Thank you for choosing ${maleName} to be the special person in your life`,
    `I can't wait to meet you and hang out with you so we can live together'`,
    `First I want to apologize if I may have made you upset and feel uncomfortable`,
    `I just want to say, happy Valentine's Day 2024 🎉`,
    `On this special day, what activities do we both want to do?`,
    `Being productive or lying down all day? hahaha`,
    ``,
  ];

  const checkUsername = () => {
    if (femaleName && maleName !== "") {
      const mailBox = document.getElementById("mailBox");
      mailBox.style.top = "0";
      const notifSound = document.getElementById("notifSound");
      notifSound.play();
      setInterval(() => {
        mailBox.style.top = "-200px";
        notifSound.stop();
      }, 2000);
      setInterval(() => {
        setIsAnswer(true);
      }, 3000);
    } else {
      const errorWrap = document.getElementById("errorWrap");
      const errSound = document.getElementById("errSound");
      errorWrap.style.top = "0px";
      setInterval(() => {
        errSound.stop();
      }, 2000);
      errSound.play();
      setIsAnswer(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  localStorage.setItem("isAnswer", isAnswer);
  localStorage.setItem("isStart", isStart);
  const dialog = localStorage.getItem("isAnswer");
  const engine = localStorage.getItem("isStart");
  const languange = localStorage.getItem("lang");
  return (
    <MainLayouts audioId={"audio"} musicName="musicApp.ogg">
      <ReactAudioPlayer src="/music/soundEffect/error.mp3" id="errSound" volume={1}></ReactAudioPlayer>
      <ReactAudioPlayer src="/music/soundEffect/notif.mp3" id="notifSound" volume={1}></ReactAudioPlayer>
      {/* registName */}
      {dialog !== "true" ? (
        <>
          {engine === "true" ? (
            <>
              <TextboxLayouts onClick={checkUsername} maleName={maleName} prevOnClick={() => setIsStart(false)}>
                <div>
                  <p>
                    Hi <input type="text" maxLength="10" placeholder="namamu!" className={`border-b-2 border-black w-24 `} value={femaleName} onChange={(e) => setfemaleName(e.target.value)} />
                    &nbsp; <br />
                    Siapa sih orang yang spesial di hidupmu ? <input type="text" placeholder="answer" className={`border-b-2 border-black w-24 `} value={maleName} maxLength="10" onChange={(e) => setMaleName(e.target.value)} />
                  </p>
                </div>
              </TextboxLayouts>
              <ErrorTextbox>Username 1 dan username 2 tidak boleh kosong 😟</ErrorTextbox>
            </>
          ) : (
            <>
              <AboutCard id={"about-display"} />
              <div className="w-full p-10 text-center button-wrap absolute  top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <h1 className="text-3xl font-bold text-violet-800 ">
                  안녕하<span className="text-pink-500">세요</span>
                </h1>

                <h1 className="text-3xl font-bold mb-5 text-violet-800">Happy Valentine Day</h1>

                <button
                  className=" bg-white w-[200px] h-12 rounded-lg border-2
          text-pink-500 font-bold text-2xl 
          "
                  onClick={() => {
                    const audio = document.getElementById("audio");
                    audio.play();
                    setIsStart(true);
                  }}
                >
                  Get Started
                </button>
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
            </>
          )}
        </>
      ) : (
        <div id="cardWrap">
          <TextboxLayouts
            maleName={maleName}
            continueBtnView={count >= dialogItemId.length - 1 ? "hidden" : "block"}
            prevViewBtn={count == 0 ? "hidden" : "block"}
            onClick={() => {
              if (count < dialogItemId.length - 1) {
                setCount(count + 1);
              } else {
                setCount(count);
                const activityCard = document.getElementById("activityCard");
                activityCard.style.display = "block";
              }
            }}
            prevOnClick={() => {
              if (count != 0) {
                setCount(count - 1);
              } else {
                setCount(count);
              }
            }}
          >
            <p>{languange === "en" ? dialogItemEn[count] : dialogItemId[count]}</p>
          </TextboxLayouts>
        </div>
      )}

      {/* activity */}
      <div className={`textBox w-full absolute top-20 p-5 ${count >= dialogItemId.length - 1 ? "block" : "hidden"}  overflow-hidden `} id="activityCard">
        <div className="w-full h-full bg-white rounded-lg p-5">
          <>
            <div>
              <h3 className="text-3xl">Hi {femaleName} !</h3>
              <form onSubmit={submitHandler}>
                <label htmlFor="message" className="text-lg mt-2">
                  Balas Pesan untuk {maleName} 💖
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Tuliskan pesan 💘"
                  className="w-full h-[25vh] resize-none border-2 border-black mt-2 rounded p-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <label htmlFor="number">phone {maleName} (Dimulai dari angka kedua)</label>
                <div className="flex items-center border-2 h-10 border-black rounded p-2">
                  <p>+62</p>
                  <input type="number" placeholder="8xxxx" maxLength={12} className="w-full h-full focus:outline-none ml-2 " value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <a href={`whatsapp://send?text=${message}&phone=+62${phone} target="_blank"`} className="cta w-full h-10 text-xl mt-2  font-bold ">
                  <div className="w-full h-full flex items-center justify-center bg-pink-500 mt-5 text-white rounded hover:bg-pink-600 p-3">Kirim</div>
                </a>
              </form>
            </div>
          </>
        </div>
      </div>
      {/* mail section */}
      <div className="mail absolute top-0 w-full h-32 p-5 ">
        <div className="w-full h-full relative overflow-hidden">
          <div className="w-full h-full bg-slate-900 flex rounded-lg absolute -top-32 transition-all duration-1000" id="mailBox">
            <div className="img w-1/2 h-full flex items-center justify-center ">
              <div className="w-[50px] h-[50px] bg-pink-600 flex items-center justify-center rounded-full">
                <MdEmail className="text-white text-4xl" />
              </div>
            </div>
            <div className="textbox w-full h-full p-3">
              <p className="text-white">You have received a new Valentine Mail</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayouts>
  );
};

export default MainContentPage;
