import { IoMdInformationCircle, IoIosCloseCircle, IoLogoInstagram, IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

const AboutCard = (prop) => {
  const { id } = prop;

  const clipCopyHandler = () => {
    const discordName = "kepin_04";
    navigator.clipboard.writeText(discordName);
  };
  return (
    <div className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden bg-[#fff] z-10 p-3  w-[80%] h-auto rounded-lg `} id={id}>
      <div className="flex justify-between">
        <h1 className="flex gap-2 items-center text-2xl font-bold text-pink-500 ">
          <IoMdInformationCircle />
          About
        </h1>
        <IoIosCloseCircle
          className="text-2xl cursor-pointer"
          onClick={() => {
            const aboutDisplay = document.getElementById("about-display");
            aboutDisplay.classList.add("hidden");
          }}
        />
      </div>
      <p className="mt-2">You are the most special person in my life. You make me laugh, make me cry, and make me feel alive.Happy Valentine&apos;s Day.</p>
      <small>create with 💖 by Olyzano &copy; 2024</small>
      <ul className="flex gap-2 text-3xl mt-5">
        {sosmedItems.map((item) => (
          <li key={item.id}>
            <Link to={item.to}>{item.icon}</Link>
          </li>
        ))}
        <FaDiscord
          onClick={() => {
            const olzmProfile = document.getElementById("olzmProfile");
            olzmProfile.classList.remove("hidden");
          }}
          className="cursor-pointer"
        />
      </ul>

      <div className="w-full h-[450px] bg-slate-950 hidden absolute top-0 left-0 rounded-lg overflow-hidden" id="olzmProfile">
        <div className="header w-full h-[100px]  relative">
          <div
            className="text-3xl text-white absolute top-5 right-5 cursor-pointer"
            onClick={() => {
              const olzmProfile = document.getElementById("olzmProfile");
              olzmProfile.classList.add("hidden");
            }}
          >
            <IoIosCloseCircle />
          </div>
          <div className="profile  w-[100px] h-[100px] absolute -bottom-10 left-5  ">
            <img src="/images/kepin.jpg" alt="profile" className="relative rounded-full w-[100px] h-[100px]" />
            <div
              className="w-[30px] h-[30px] bg-green-900 absolute bottom-2 right-0 rounded-full 
              p-1  
            "
            >
              <div className="w-full h-full rounded-full bg-green-500 p-1">
                <div className=" h-full rounded-md bg-green-900"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[350px]  p-5 pt-20 bg-slate-800 ">
          <div className="textbox w-full h-full bg-slate-900 rounded-lg relative  p-5">
            <div className="w-32 text-lg text-white text-center absolute -top-14 right-5 bg-green-700 rounded-md p-2">
              <button
                onClick={clipCopyHandler}
                onMouseEnter={() => {
                  const copy = document.getElementById("copy");
                  copy.classList.remove("hidden");
                }}
                onMouseLeave={() => {
                  const copy = document.getElementById("copy");
                  copy.classList.add("hidden");
                }}
              >
                Add Friend
              </button>
            </div>
            <small
              className="w-20 text-lg text-white text-center absolute -top-[100px] right-5 bg-slate-600 rounded-full hidden
            "
              id="copy"
            >
              copy
            </small>
            <div className="textbox text-white">
              <h3 className="text-2xl">Olyzano</h3>
              <p>kepin04</p>
              <small>berani , yakin , sukses!</small>
            </div>
            <div className="text-white mt-5 font-bold">
              <h4>User info</h4>
            </div>
            <div className="footTextbox text-white ">
              <p>Discord member since</p>
              <small>Apr 9 , 2018</small>
            </div>
            <div className="layer w-full h-full absolute top-0 left-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const sosmedItems = [
  {
    id: 1,
    icon: <IoLogoInstagram />,
    to: "https://www.instagram.com/kevien.oj/",
  },
  {
    id: 2,
    icon: <IoLogoGithub />,
    to: "https://github.com/Kepin17",
  },
];

export default AboutCard;
