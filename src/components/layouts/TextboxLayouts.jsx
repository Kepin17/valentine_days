const TextboxLayouts = (prop) => {
  const { children, maleName = "system", onClick, prevOnClick, continueBtnView = "block", prevViewBtn } = prop;
  return (
    <div className="textbox-card w-full h-[60vh] absolute top-0 flex flex-col items-center justify-center p-5">
      <div className="w-full h-[20vh] relative bg-white rounded-md p-10">
        {children}
        <div
          className="w-32 h-10 absolute -top-4 left-5 bg-pink-600 rounded-md flex items-center justify-center  
          text-white fold-bold text-xl
          "
        >
          <h1>{maleName}</h1>
        </div>
        <div className="absolute -bottom-4 right-5 text-xl text-white flex gap-4 items-center justify-center">
          <button onClick={prevOnClick} className={`w-[100px] h-10 bg-pink-600 rounded-md ${prevViewBtn}`} id="prevBtn">
            Previous
          </button>
          <button onClick={onClick} className={`w-[100px] h-10 bg-pink-600 rounded-md ${continueBtnView} `} id="contBtn">
            continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextboxLayouts;
