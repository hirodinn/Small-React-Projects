import "./App.css";
function App() {
  return (
    <div className="font-outfit">
      <div className=" bg-[url(/images/bg-header-mobile.png)] md:bg-[url(/images/bg-header-desktop.png)] bg-no-repeat bg-cover h-150 md:h-100 flex items-center justify-center">
        <img src="images/logo.svg" className="min-w-[300px] md:min-w-0" />
      </div>
      <div className="w-[80%] max-w-[750px] border-2 mx-auto mt-[-70px] md:mt-0 px-0">
        <h1 className="text-my-dark-gray text-center text-5xl font-bold">
          A history of everything you copy
        </h1>
        <p className="text-my-light-gray text-[20px] text-center leading-8 mt-5">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </div>
    </div>
  );
}

export default App;
