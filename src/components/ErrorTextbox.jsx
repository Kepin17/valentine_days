const ErrorTextbox = (prop) => {
  const { children } = prop;

  return (
    <div
      className="w-[90%] h-[50%] border-2 absolute -top-[400px] left-[5%] bg-white flex flex-col items-center justify-cente 
    transition-all ease-in-out duration-300
    "
      id="errorWrap"
    >
      <div className="w-full h-[50%] flex items-center justify-center">
        <img src="/images/errorMsg.jpg" alt="errorMsg" width={250} />
      </div>
      <main className="w-[90%] h-[50%] p-5">{children}</main>
      <div className="w-full h-[50%] flex items-center justify-center gap-5">
        <button
          className="p-2 bg-pink-500 text-white font-bold rounded-lg"
          onClick={() => {
            const errorWrap = document.getElementById("errorWrap");
            errorWrap.style.top = "-400px";
          }}
        >
          Sudah Paham
        </button>
      </div>
    </div>
  );
};

export default ErrorTextbox;
