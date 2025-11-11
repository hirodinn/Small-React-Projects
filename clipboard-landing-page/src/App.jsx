import "./App.css";
function App() {
  return (
    <div className="font-outfit">
      <div className=" bg-[url(/images/bg-header-mobile.png)] md:bg-[url(/images/bg-header-desktop.png)] bg-no-repeat bg-cover h-150 md:h-100 flex items-center justify-center">
        <img src="images/logo.svg" className="min-w-[300px] md:min-w-0" />
      </div>
      <div className="w-[80%] max-w-[750px] mx-auto mt-[-70px] md:mt-0 px-0">
        <h1 className="text-my-dark-gray text-center text-5xl font-bold">
          A history of everything you copy
        </h1>
        <p className="text-my-light-gray text-[20px] text-center leading-8 mt-5">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex flex-col md:flex-row justify-center text-[20px] mt-8 gap-3">
          <button className="text-white bg-my-green rounded-4xl py-3 px-6 cursor-pointer shadow-[0_4px_5px_rgba(0,0,0,0.5)] font-outfit w-full md:w-fit">
            Download for iOS
          </button>
          <button className="text-white bg-my-violet rounded-4xl py-3 px-6 cursor-pointer shadow-[0_4px_5px_rgba(0,0,0,0.5)] font-outfit w-full md:w-fit">
            Download for mac
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
